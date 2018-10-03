const axios = require('axios');
const { approvalUrl } = require("../../../lib/config")

const sendApprovalEmail = (body) => {
  return axios.post(approvalUrl, body);
}

module.exports = {
  sendApprovalEmail
}