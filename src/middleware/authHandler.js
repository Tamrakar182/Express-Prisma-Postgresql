import jwt from "jsonwebtoken";
import Unauthenticated from "../errors/unauthenticated.js";

const authHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Unauthenticated("No token provided");
    }
    const token = authHeader.split(" ")[1];
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            throw new Unauthenticated("Invalid token");
        }
        return user;
    });
    if (!decoded) {
        throw new Unauthenticated("Invalid token");
    }
    req.user = decoded;
    next();
};

export default authHandler;