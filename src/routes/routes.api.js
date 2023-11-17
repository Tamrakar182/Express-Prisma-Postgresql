import express from "express";
import userController from "../modules/users/user.controller.js";
import authController from "../modules/auth/auth.controller.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ data: "", msg: "API Router is working" });
});

router.use("/users", userController);
router.use("/auth", authController);

router.all("*", (req, res, next) => {
  res.json({ data: "", msg: "Route not found..." });
});

export default router;
