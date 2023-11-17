import bcrypt from "bcrypt";
import prisma from "../../database/prisma.js";

const login = async (email, password) => {
    const user = await prisma.user.findFirst({
        where: { email }
    });
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Incorrect password");
    }
    return user;
};

const register = async (payload) => {
      const { email, password } = payload;
      const user = await prisma.user.findFirst({
        where: { email },
      });
      if (user) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return newUser;
};

export default {
    login,
    register,
};