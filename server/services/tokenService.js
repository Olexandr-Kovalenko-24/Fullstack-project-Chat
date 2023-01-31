const {promisify} = require('util');
const jwt = require('jsonwebtoken');

const ACCESS_SECRET_VALUE = "super-secret";
const REFRESH_SECRET_VALUE = "refresh-super-secret";

const ACCESS_TIME = 60;
const REFRESH_TIME = 60*60;

const promisifySignJWT = promisify(jwt.sign);
const promisifyVerifyJWT = promisify(jwt.verify);

module.exports.createAccessToken = async ({userId, email}) => await promisifySignJWT({userId, email}, 
    ACCESS_SECRET_VALUE, {
        expiresIn: ACCESS_TIME
    });

module.exports.verifyAccessToken = async (token) => await promisifyVerifyJWT(token, ACCESS_SECRET_VALUE);


module.exports.createRefreshToken = async ({userId, email}) => await promisifySignJWT({userId, email}, 
    REFRESH_SECRET_VALUE, {
        expiresIn: REFRESH_TIME
    });

module.exports.verifyRefreshToken = async (token) => await promisifyVerifyJWT(token, REFRESH_SECRET_VALUE);