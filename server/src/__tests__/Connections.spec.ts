import supertest from 'supertest';
import app from '../app';
import db from '../database/connection';
describe('Connections', () => {

  it('should create connection with valid data', async () => {
    const response = await supertest(app).post('/connections')
    .send({
      user_id: 1,
    });

    expect(response.status).toBe(201);
  });


  it('should return status 200', async () => {
    const response = await supertest(app).get('/connections');
    expect(response.status).toBe(200);
  });

  it('should return property total', async () => {
    const response = await supertest(app).get('/connections');
    expect(response.body).toHaveProperty('total');
  });

  afterAll(done => {
    db.destroy();
    done();
  })
})