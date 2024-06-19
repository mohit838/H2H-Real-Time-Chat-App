import UserModel from "../models/UserModel.js";

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

      const createNewUser = await UserModel.create({
        fullName,
        userName: userName.toLowerCase(),
        password,
        gender,
        profilePic: gender === "male" ? boyRandomAvatar : girlRandomAvatar,
      });

      const checkNewUser = await UserModel.findById(createNewUser?._id).select(
        "-password"
      );

      // If user not created
      if (!checkNewUser) {
        return res.status(500).json({ error: "Problem with creating user!" });
      }

      // Return user info
      res.status(201).json({
        user: checkNewUser,
      });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}

export default new Auth();
