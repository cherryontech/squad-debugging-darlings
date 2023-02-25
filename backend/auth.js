const jwt = require('jsonwebtoken');

// define a middleware function to check authentication
module.exports = (req, res, next) => {
    console.log("req", req.headers);
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Missing Authorization header' });
    }


    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401).send("Access denied. No token provided");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // if the token is not valid, return a 403 Forbidden error
            return res.sendStatus(403).send("Invalid token");
        }

        // if the token is valid, attach the user information to the request object and call next middleware
        req.user = user;
        next();
    });
};
