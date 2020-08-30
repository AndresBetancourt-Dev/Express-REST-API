const Users = {};

Users.getUsers = (req, res) => res.json([]);
Users.createUser = (req, res) => res.json({ message: "User Created" });

Users.getUserById = (req, res) => res.json({});
Users.updateUser = (req, res) => res.json({ message: "User Updated" });
Users.deleteUser = (req, res) => res.json({ message: "User Deleted" });

module.exports = Users;
