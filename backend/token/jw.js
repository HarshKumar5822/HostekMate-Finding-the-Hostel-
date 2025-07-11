const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET, // Use a secret key from .env
        { expiresIn: "1h" } // Token expiration
    );
};

// Example usage
const token = generateToken({ id: 1, email: "user@example.com" });
console.log("JWT Token:", token);
