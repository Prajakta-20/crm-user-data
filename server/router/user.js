import express from "express";
import bcrypt from "bcrypt";
import { AddUser } from "../models/AddUser.js";
import { verifyAdmin } from "./auth.js";

const router = express.Router();

router.post("/admin", verifyAdmin, async (req, res) => {
  try {
    const { username, email, phone, address, password } = req.body;

    const user = await AddUser.findOne({ username });
    if (user) {
      return res.json({ message: "User is already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = new AddUser({
      username,
      email,
      phone,
      address,
      password: hashPassword,
    });
    await newuser.save();
    return res.json({ registered: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error in registering user" });
  }
});

export { router as userRouter };
