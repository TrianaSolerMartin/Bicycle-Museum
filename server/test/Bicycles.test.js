import require  from 'express';
import request from 'supertest';
import { app, server } from '../App.js'; 
import connection_db from '../database/connection_db.js';
import BicycleModel from '../models/BicycleModel.js';

const api = request(app); //request nos permite hacer solicitudes a la app

describe('Testing CRUD Bicycles', () => {

    test("Response body must be an array and then show 200 status", async()=>{
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true); //que objeto quiero recibir, modificar
        expect(response.status).toBe(200);
    });

    test('Post response should be an object and return status 201', async() => {
        const response = await api.post('/api').send({
                "model": "Test",
                "speeds": "5",
                "frame": "test",
                "electric": "1",
                "image": "www.test.com"
            });
            expect(typeof response.body).toBe("object");
            expect(response.status).toBe(201);
    })

    describe('DELETE ', () =>{
        let createdBicycle = {};
        let response;
        beforeEach(async () => {
            createdBicycle = await BicycleModel.create({ 
                "model": "Test",
                "speeds": "5",
                "frame": "test",
                "electric": "1",
                "image": "www.test.com"
            });

            response = await request(app).delete(`/api/${createdBicycle.id}`).send();
        });

        test('should return a response with status 200 and type json', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        // test('should return a message bicycle deleted successfully', async () => {
        //     expect(response.body.message).toContain("Bicycle has been delete successfully!");
        //     const findBicycle = await BicycleModel.findOne({where:{ id: createdBicycle.id}});
        //     expect(findBicycle).toBeNull();
        // })

        afterAll(async() =>{
            await BicycleModel.destroy({where:{ id: createdBicycle.id}})
        })
    })

    afterAll( () => {
        connection_db.close();
        server.close();
    });
})