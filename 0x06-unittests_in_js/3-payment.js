const utils = require("./utils")
const sendPaymentRequestToApi = (totalAmount, totalShipping) {
    const res = utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${res}`);
}