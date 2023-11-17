import { Router } from "express";
import Controller from "./auth.controller.js";

const router = Router();

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const result = await Controller.login(email, password);
        res.json({ data: result, msg: "Logged in Successfully" });
    } catch(e) {
        res.status(400).json({ msg: e.message });
    }
});

router.post("/register", async (req, res, next) => {
    try {
        const result = await Controller.register(req.body);
        res.json({ data: result, msg: "User Successfully Created" });
    } catch(e) {
        res.status(400).json({ msg: e.message });
    }
});

export default router;