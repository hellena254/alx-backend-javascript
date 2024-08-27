const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // setup the spy before eact Test
  beforeEach(() => {
    consoleSpy.restore();
  });

  it('logs the correct total for sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    // Verify console.log was called only once
    expect(consoleSpy.callCount).to.be.equal(1);
  });

  it('logs the correct total for sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
