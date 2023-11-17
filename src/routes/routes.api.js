import express from "express";
import userRouter from "../modules/users/user.routes.js";
import authRouter from "../modules/auth/auth.routes.js"

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ data: "", msg: "API Router is working" });
});

router.use("/users", userRouter);
router.use("/auth", authRouter);

router.all("*", (req, res, next) => {
  res.json({ data: "", msg: "Route not found..." });
});

export default router;
