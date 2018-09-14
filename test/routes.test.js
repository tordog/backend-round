import request from 'supertest';
import app from '../src/app.js';

describe('GET /ping', () => {
  it('should reply with pong', async () => {
    await request(app)
      .get('/api/ping')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('pong');
      });
  });
});

describe('GET /api/list', () => {
  it('should render properly with valid parameters', async () => {
    await request(app)
      .get('/api/list')
      .query({ name: 'Zupreme' })
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual(JSON.stringify({
          id: 1,
          name: 'Zupreme',
          price: 2395,
          image: 'https://assets.zumepizza.com/public/i3dk55ju.png'
        }));
      });
  });

  it('should error without a valid parameter', async () => {
    await request(app).get('/api/list').expect(400);
  });
});
