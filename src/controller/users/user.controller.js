import express from "express";
import UserService from "../../services/users/user.services.js";
import asyncWrapper from "../../utils/wrapper.js";
import sendResponse from "../../utils/responseSender.js";
import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

const router = express.Router();

router.get("/", asyncWrapper(async (req, res, next) => {
  const result = await UserService.getAll();
  sendResponse(res, StatusCodes.OK, result, ReasonPhrases.OK);
}));

router.get("/:id", asyncWrapper(async (req, res, next) => {
  const result = await UserService.getById(req.params.id);
  if (!result) {
    sendResponse(res, StatusCodes.NOT_FOUND, result, "User not found");
    return;
  }
  sendResponse(res, StatusCodes.OK, result, ReasonPhrases.OK);
}));

router.put("/:id", asyncWrapper(async (req, res, next) => {
  const result = await UserService.updateById(req.params.id, req.body);
  if (!result) {
    sendResponse(res, StatusCodes.NOT_FOUND, result, "User not found");
    return;
  }
  sendResponse(res, StatusCodes.OK, result, ReasonPhrases.OK);
}));

export default router;