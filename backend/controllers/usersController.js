const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/UserModel");
const { hashPassword } = require("../handlers/passwordHandler");
// @desc Create new user
// @route POST /api/users
// @access public

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("fill in all the forms");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (!user) {
    res.status(400);
    throw new Error("trouble creating new account");
  }

  res.status(200).json({ username, email, password: hashedPassword });
});

// @desc Get user
// @route GET /api/users/:id
// @access public

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  res.status(200).json({ username: user.username, id: user.id });
});

// @desc Update user
// @route PUT /api/users/:id
// @access private

const updateUser = (req, res) => {
  res.status(200).json({ message: "updated user" });
};

// @desc Delete user
// @route DELETE /api/users/:id
// @access private

const deleteUser = (req, res) => {
  res.status(200).json({ message: "deleted user" });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
