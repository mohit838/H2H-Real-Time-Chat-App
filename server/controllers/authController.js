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

      // Check user is exists or not
      const user = await UserModel.findOne({ userName });

      console.log("user===>", user);

      if (user) {
        return res.status(400).json({ error: "User exists!" });
      }

      //   Hash password
      //   const randomAvatar = `https://i.pravatar.cc/300`; // Backup links
      const boyRandomAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
      const girlRandomAvatar = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

      const createNewUser = new UserModel({
        fullName,
        userName,
        password,
        gender,
        profilePic: gender === "male" ? boyRandomAvatar : girlRandomAvatar,
      });

      await createNewUser.save();

      console.log(createNewUser);

      res.status(201).json({
        _id: createNewUser._id,
        fullName: createNewUser.fullName,
        userName: createNewUser.userName,
        profilePic: createNewUser.profilePic,
      });
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }

  // Login
  async login(req, res) {
    try {
      console.log(req.body);
    } catch (error) {
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}
export default new Auth();
