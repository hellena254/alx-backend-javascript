/**
 * Simulates an API call to get a payment token.
 * 
 * @param {boolean} success - Indicates whether the API call is successful.
 * @returns {Promise<object>} - Resolves with an object containing the API response data if success is true.
 */
const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject(new Error('Failed to get payment token')); // Rejecting with an error when success is false
    }
  });
};

module.exports = getPaymentTokenFromAPI;

