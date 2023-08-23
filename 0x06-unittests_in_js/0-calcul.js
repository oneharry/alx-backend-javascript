const calculateNumber = (a, b) => {
    if(typeof a == 'number' && typeof b == 'number') {
        return (Math.round(a) + Math.round(b));
    }
    return "Args must be number";
}

module.exports = calculateNumber;