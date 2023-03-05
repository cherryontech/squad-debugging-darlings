const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'xxx';

// define a middleware function to check authentication
module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Access Denied, Missing Authorization header' });
    }


    const token = authHeader && authHeader.split(' ')[1];

    //Token will be stored and used for front end later
    if (!token) {
        return res.sendStatus(401).send("Access denied. No token provided");
        // return next({ status: 401, message: 'Access denied. No token provided' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            // if the token is not valid, return a 403 Forbidden error
            return res.sendStatus(403).send("Invalid token");
            // return next({ status: 403, message: 'Invalid token' });
        }

        // if the token is valid, attach the user information to the request object and call next middleware
        req.user = user;
        next();
    });
};
