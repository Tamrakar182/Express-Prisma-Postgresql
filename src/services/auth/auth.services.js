import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userServices from "../users/user.services.js";
import NotFound from "../../errors/notFound.js";
import BadRequest from "../../errors/badRequest.js";

const login = async (email, password) => {
  const user = await userServices.findByEmail(email);
  if (!user) {
    throw new NotFound("User not found", );
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new BadRequest("Incorrect password");
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return {user, token};
};

const register = async (email, password) => {
  const user = await userServices.findByEmail(email);
  if (user) {
    throw new BadRequest("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userServices.create({
      email,
      password: hashedPassword,
    });
  return newUser;
};

export default {
  login,
  register,
};