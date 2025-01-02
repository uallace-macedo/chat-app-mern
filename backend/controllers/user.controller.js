import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId } // $not_equal
    }).select('-password');

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.error(`> ERRO (getUsersForSidebarController): Erro ao buscar usuários da barra lateral. [${error.message}]`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}