import express from "express";
import UserService from "./user.services.js";
import { asyncWrapper } from "../../utils/wrapper.js";

const router = express.Router();

router.get("/", asyncWrapper(async (req, res, next) => {
  const result = await UserService.getAll();
  res.json({ payload: result, msg: "success" });
}));

router.get("/:id", asyncWrapper(async (req, res, next) => {
  const result = await UserService.getById(req.params.id);
  res.json({ payload: result, msg: "success" });
}));

router.post("/", asyncWrapper(async (req, res, next) => {
  const result = await UserService.create(req.body);
  res.json({ payload: result, msg: "success" });
}));

router.put("/:id", asyncWrapper(async (req, res, next) => {
  const result = await UserService.updateById(req.params.id, req.body);
  res.json({ payload: result, msg: "success" });
}));

export default router;