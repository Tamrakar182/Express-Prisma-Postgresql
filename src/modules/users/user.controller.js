import express from "express";
import UserService from "./user.services.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const result = await UserService.getAll();
        res.json({ data: result, msg: "success" });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
})

router.get("/:id", async (req, res, next) => {
  try {
    const result = await UserService.getById(req.params.id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await UserService.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const result = await UserService.updateById(req.params.id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;