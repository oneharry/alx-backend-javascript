const calculateNumber = (type, a, b) => {
    if(typeof a == 'number' && typeof b == 'number') {
        if(typeof type !== 'string') {
            return "Type must be string: SUM | DIVIDE | SUBSTRACT"
        }
        if(type === 'SUM') {
            return (Math.round(a) + Math.round(b));
        }
        if(type === 'DIVIDE') {
            const div = (Math.round(a) / Math.round(b));
            if(Math.round(div) === 0) {
                return "Error";
            }
            return Math.round(div);
        }
        if(type === 'SUBSTRACT') {
            return (Math.round(a) - Math.round(b));
        } 
    }
    return "Args must be number";
}

module.exports = calculateNumber;