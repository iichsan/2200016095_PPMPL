const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

let server;

before((done) => {
  server = app.listen(3001, () => {
    done();
  });
});

after((done) => {
  server.close(() => {
    done();
  });
});

describe('API Testing', () => {
  it('should return all items', (done) => {
    request(app)
      .get('/api/items')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
        done();
      });
  });

  it('should create a new item', (done) => {
    const newItem = { name: 'Item 3' };
    request(app)
      .post('/api/items')
      .send(newItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', 'Item 3');
        done();
      });
  });

  it('should update an item by id', (done) => {
    const itemIdToUpdate = 2; // 
    const updatedItem = { name: 'Updated Item' };
    request(app)
      .put(`/api/items/${itemIdToUpdate}`)
      .send(updatedItem)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('name', 'Updated Item');
        done();
      });
  });

  it('should delete an item by id', (done) => {
    const itemIdToDelete = 1; // Ganti dengan ID yang sesuai
    request(app)
      .delete(`/api/items/${itemIdToDelete}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Item deleted successfully');
        done();
      });
  });
});
