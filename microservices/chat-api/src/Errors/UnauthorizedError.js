const ErrorBase = require('../errors/ErrorBase');
class UnauthorizedError extends ErrorBase{
    constructor(message = 'Please sign in to access the resource'){
        super(401, message);
    }
}

module.exports = UnauthorizedError;
