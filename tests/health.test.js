const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('deve retornar 200 com mensagem correta', async () => {
        const resp = await request(app).get('/');
        expect(resp.statusCode).toEqual(200);
        expect(resp.text).toBe('Hello, DevOps in Azure!');
    });
})