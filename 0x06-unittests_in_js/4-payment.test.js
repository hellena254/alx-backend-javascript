const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls Utils.calculateNumber and console.log with the right arguments', () => {
    // Create a stub for Utils.calculateNumber that always returns 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Check if the stub was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);

    // Check if console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);

    // Restore the stub and spy to their original behaviors
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});

