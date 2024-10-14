import request from 'supertest';
import app from './app.js'; // Asegúrate de exportar tu app desde app.js

describe('Test the /pets route', () => {
    it('should return a 200 status code', async () => {
        const res = await request(app).get('/pets');
        expect(res.statusCode).toEqual(200);
    });

    it('should return a list of pets', async () => {
        const res = await request(app).get('/pets');
        expect(res.body).toBeDefined();
    });
});
