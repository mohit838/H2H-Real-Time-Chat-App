import UserModel from "../models/UserModel.js";
import { ApiError } from "../utils/ApiErrors.js";

class Auth {
  // Register
  async register(req, res) {
    try {
      const { fullName, userName, password, confirmPassword, gender } =
        req.body;

      // Check password fields
      if (password !== confirmPassword) {
        throw new ApiError(400, "Password not match!");
      }

      // Check weather the fields are empty or not
      if (
        [fullName, userName, password, gender].some(
          (field) => field?.trim() === ""
        )
      ) {
        throw new ApiError(400, "Required all fields.");
      }

      const existedUser = await UserModel.findOne({
        $or: [{ userName }],
      });

      if (existedUser) {
        return res.status(409).json({ error: "User already exist!" });
      }

      // Random Profile Images
      const boyRandomAvatar =
        `https://avatar.iran.liara.run/public/boy?username=${userName}` ||
        `https://i.pravatar.cc/300`;

      const girlRandomAvatar =
        `https://avatar.iran.liara.run/public/girl?username=${userName}` ||
        `https://i.pravatar.cc/300`;

      const createNewUser = await UserModel.create({
        fullName,
        userName: userName.toLowerCase(),
        password,
        gender,
        profilePic: gender === "male" ? boyRandomAvatar : girlRandomAvatar,
      });

      const checkNewUser = await UserModel.findById(createNewUser?._id).select(
        "-password -refreshToken"
      );

      if (!checkNewUser) {
        return res.status(500).json({ error: "Problem with creating user!" });
      }

      res.status(201).json({
        _id: createNewUser._id,
        fullName: createNewUser.fullName,
        userName: createNewUser.userName,
        gender: createNewUser.gender,
        profilePic: createNewUser.profilePic,
        refreshToken: createNewUser.refreshToken,
      });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}
export default new Auth();
