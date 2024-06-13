// userRouter.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController");

/**
 * @swagger
 * /api/user/all:
 *   get:
 *     description: Retrieve all users
 *     responses:
 *       '200':
 *         description: A list of users
 */
router.get("/all", userController.getUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Retrieve user by ID
 *     description: Retrieve details of a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User details
 *       '404':
 *         description: User not found
 */
router.get("/:id", userController.getUserById);

/**
 * @swagger
 * /api/user/save:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request
 */
router.post("/save", userController.createUser);

/**
 * @swagger
 * /api/user/update/{id}:
 *   put:
 *     summary: Update user details
 *     description: Update details of a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *       '404':
 *         description: User not found
 *       '400':
 *         description: Bad request
 */
router.put("/update/:id", userController.updateUser);

/**
 * @swagger
 * /api/user/delete/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 */
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
