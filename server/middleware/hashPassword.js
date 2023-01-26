const bcrypt = require('bcryptjs');

const SALT_ROUND = 1;

module.exports.hashPass = async (req, res, next) => {
    try {
        const {body: {password}} = req; 
        req.passwordHash = await bcrypt.hash(password, SALT_ROUND);
        next();
    } catch (error) {
        next(error);
    }
}