const User = require('../models/user');

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

const getUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    if (!user) {
        res.status(404).json("User not found");
    }

    res.status(200).json(user);
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            res.status(404).json("User not found");
        }

        const updatedUser = await User.findById(user.id);
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            res.status(404).json({message: 'User not found'});
        }

        res.status(204).json({message: "User deleted successfully"});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}