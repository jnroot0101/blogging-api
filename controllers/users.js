const User = require('../models/user');

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

const getUser = async (req, res) => {
    const id = req.params.id;
    // const user =
}