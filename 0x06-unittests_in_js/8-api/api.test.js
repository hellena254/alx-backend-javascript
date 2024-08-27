// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app
const PORT = 7865;
const API_URL = `http://localhost:${PORT}`;

describe('Index page', function() {
  // Use this to control the server startup and shutdown
  before((done) => {
    app.listen(PORT, () => {
      done();
    });
  });

  after((done) => {
    // Close the server after the tests have run
    app.close(() => {
      done();
    });
  });

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

