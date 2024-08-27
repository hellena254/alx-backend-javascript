const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app
const PORT = 7865;
const API_URL = `http://localhost:${PORT}`;

describe('API integration test', function() {
  // Start the server before running the tests
  before((done) => {
    app.listen(PORT, () => {
      done();
    });
  });

  // Close the server after tests are done
  after((done) => {
    app.close(() => {
      done();
    });
  });

  // Test suite for the index page
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  // Test suite for the /cart/:id endpoint
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // Test suite for the /available_payments endpoint
  describe('GET /available_payments', () => {
    it('should return the correct JSON object', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  // Test suite for the /login endpoint
  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      request.post({
        url: `${API_URL}/login`,
        body: JSON.stringify({ userName: 'Betty' }),
        headers: { 'Content-Type': 'application/json' }
      }, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
        done();
      });
    });
  });
});

