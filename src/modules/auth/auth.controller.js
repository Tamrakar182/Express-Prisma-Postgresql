import { Router } from "express";
import AuthServices from "./auth.services.js";
import { asyncWrapper } from "../../utils/wrapper.js";

const router = Router();

router.post("/login", asyncWrapper(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const result = await AuthServices.login(email, password);
    res.json({ payload: result, msg: "Logged in Successfully" });
}));

router.post("/register", asyncWrapper(async (req, res) => {
    const result = await AuthServices.register(req.body);
    res.json({ payload: result, msg: "User Successfully Created" });
}));

export default router;