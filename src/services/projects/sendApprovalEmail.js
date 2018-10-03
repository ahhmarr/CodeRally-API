const axios = require('axios');

const sendApprovalEmail = (body) => {
  return axios.post('https://linchpindevelopment-emailer.herokuapp.com/coderally/newproject', body);
}

module.exports = {
  sendApprovalEmail
}