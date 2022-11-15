const app = require('../../app');
const request = require('supertest');
const Person = require('../../models/Person');

describe('Person', () => {
  describe('GET/person', () => {
    it('should return a list of people', async () => {
      const people = [
        { name: 'John', age:
        20, approved: true },
        { name: 'Jane', age:
        21, approved: false }
      ];
      await Person.create(people);
      const response = await request(app).get('/person');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe('John');
      expect(response.body[1].name).toBe('Jane');
    });
  });
});

