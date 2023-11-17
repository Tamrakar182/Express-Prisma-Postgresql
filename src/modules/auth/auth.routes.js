import { Router } from "express";
import Controller from "./auth.controller";

const router = Router();

router.post("/login", (req, res, next) => {
    try {
        const result = Controller.login(req, res);
        res.json({ data: result, msg: "success" });
    } catch(e) {
        next(e);
    }
});

router.post("/register", (req, res, next) => {
    try {
        const result = Controller.register(req, res);
        res.json({ data: result, msg: "success" });
    } catch(e) {
        next(e);
    }
});

export default router;