// userRouter.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController");

// Route to fetch users data
router.get("/all", userController.getUsers);
// Route to fetch user details by ID
router.get("/:id", userController.getUserById);
// Route to create a new user
router.post("/save", userController.createUser);
// Route to update user details
router.put('/update/:id', userController.updateUser);
// Route to delete user by ID
router.delete('/delete/:id', userController.deleteUser);
module.exports = router;
