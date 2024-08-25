const express = require("express");
const {getUsers, getUser, updateUser, deleteUser, createUser} = require("../controllers/users");
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;