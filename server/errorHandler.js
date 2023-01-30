const NotFoundError = require('./errors/NotFound');
const InvalidDataError = require('./errors/InvalidDataError');
const TokenError = require('./errors/TokenError')

module.exports.errorHandler = async (err, req, res, next) => {
    if (err instanceof NotFoundError) {
        return res.status(404).send({error: err.message});
    }

    if (err instanceof InvalidDataError) {
        return res.status(404).send({error: err.message});
    }

    if (err instanceof TokenError) {
        return res.status(401).send({error: err.message});
    }

    return res.status(500).send({error: err.message || 'Server error'});
}