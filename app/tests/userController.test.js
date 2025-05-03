const request = require('supertest');
const app = require('../../server'); // Asegúrate de que la ruta al server es correcta

describe('User Controller', () => {
  it('GET /api/users debe devolver 200', async () => {
    const res = await request(app).get('/api/users'); // Asegúrate de que esta ruta existe
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); // Suponiendo que devuelve una lista
  });

  it('POST /api/users debe crear un usuario', async () => {
    const newUser = { name: 'David', email: 'david@example.com' };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('David');
    expect(res.body.email).toBe('david@example.com');
  });
});

const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});