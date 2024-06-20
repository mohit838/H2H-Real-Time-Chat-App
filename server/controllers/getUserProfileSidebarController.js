import UserModel from "../models/UserModel.js";

class UserProfileSidebar {
  async sidebar(req, res) {
    try {
      const userLoggedInId = req.userId._id;
      const filteredUsers = await UserModel.find({
        _id: {
          $ne: userLoggedInId,
        },
      }).select('-password');

      return res.status(200).json(filteredUsers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Server internal error!" });
    }
  }
}

export default new UserProfileSidebar();
