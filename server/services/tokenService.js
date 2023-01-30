const {promisify} = require('util');
const jwt = require('jsonwebtoken');

const SECRET_VALUE = "super-secret";

const ACCESS_TIME = 60*60;

const promisifySignJWT = promisify(jwt.sign);
const promisifyVerifyJWT = promisify(jwt.verify);

module.exports.createToken = async ({userId, email}) => await promisifySignJWT({userId, email}, 
    SECRET_VALUE, {
        expiresIn: ACCESS_TIME
    });

module.exports.verifyToken = async (token) => await promisifyVerifyJWT(token, SECRET_VALUE);