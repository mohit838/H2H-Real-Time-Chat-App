import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";
import { genJwtToken } from "../utils/tokenAndCookie.js";

class Auth {
  // Register
  async register(req, res) {
    try {
      const { fullName, userName, password, confirmPassword, gender } =
        req.body;

      // Check password fields
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Password not match!" });
      }

      // Check whether the fields are empty or not
      if (
        [fullName, userName, password, gender].some(
          (field) => field?.trim() === ""
        )
      ) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const existedUser = await UserModel.findOne({
        $or: [{ userName }],
      });

      if (existedUser) {
        return res.status(409).json({ error: "User already exists!" });
      }

      // Random Profile Images
      const boyRandomAvatar =
        `https://avatar.iran.liara.run/public/boy?username=${userName}` ||
        `https://i.pravatar.cc/300`;

      const girlRandomAvatar =
        `https://avatar.iran.liara.run/public/girl?username=${userName}` ||
        `https://i.pravatar.cc/300`;

      // Hash Password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const createNewUser = await UserModel.create({
        fullName,
        userName: userName.toLowerCase(),
        password: hashPassword,
        gender,
        profilePic: gender === "male" ? boyRandomAvatar : girlRandomAvatar,
      });

      const checkNewUser = await UserModel.findById(createNewUser?._id).select(
        "-password"
      );

      // If user not created
      if (!checkNewUser) {
        return res.status(500).json({ error: "Problem with creating user!" });
      } else {
        // JWT token
        genJwtToken(checkNewUser, res);

        // Return user info
        res.status(201).json({
          user: checkNewUser,
        });
      }
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }

  // Login
  async login(req, res) {
    try {
      const { userName, password } = req.body;

      // Check whether the fields are empty or not
      if ([userName, password].some((field) => field?.trim() === "")) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const existedUser = await UserModel.findOne({
        $or: [{ userName }],
      });

      if (!existedUser) {
        return res.status(404).json({ error: "User not exists!" });
      }

      // If there is an user
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existedUser?.password || ""
      );

      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Wrong credential!" });
      } else {
        const user = await UserModel.findById(existedUser?._id).select(
          "-password"
        );

        genJwtToken(user._id, res);
        // Return user info
        res.status(200).json({
          user: user,
        });
      }
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }

  // Logout
  async logout(req, res) {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      return res.status(200).json({ msg: "Logout successfully." });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}

export default new Auth();
