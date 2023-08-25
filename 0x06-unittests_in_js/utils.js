const calculateNumber = require("./2-calcul_chai");

const Utils = {
    calculateNumber(type, a, b) {
        if(typeof type !== 'string') {
            return "type must be a string";
        }
        if(typeof a == 'number' && typeof b == 'number') {
            if(type === 'SUM') {
                return (Math.round(a) + Math.round(b));
            }
            if(type === 'DIVIDE') {
                if(Math.round(b) === 0) {
                    return "Error";
                }
                return (Math.round(a) / Math.round(b));
            }
            if(type === 'SUBSTRACT') {
                return (Math.round(a) - Math.round(b));
            }
            return "type must be string: SUM | DIVIDE | SUBSTRACT"
        }
        return "Args must be number";
    }
}

module.exports = Utils;