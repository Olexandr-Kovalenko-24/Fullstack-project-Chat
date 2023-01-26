class InvalidDataError extends Error {
    constructor(message){
        super(message);
    }
}

module.exports = InvalidDataError;