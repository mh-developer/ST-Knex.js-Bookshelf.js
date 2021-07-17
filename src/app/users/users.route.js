const express = require("express");
const router = express.Router();
const usersService = require("./services/users.service");
const userModel = require("./models/user.model");

router.get("/", async (req, res) => {
    try {
        const users = await usersService.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params, user = await usersService.get(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json(`User ${id} not found.`);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post(
    "/",
    async (req, res, next) => {
        try {
            const { error } = await userModel.validateAsync(req.body);
            if (error) {
                res.status(400).json("Model validation error");
            } else {
                next();
            }
        } catch (error) {
            res.status(400).json(error);
        }
    },
    async (req, res) => {
        try {
            const user = await usersService.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }
);

router.put(
    "/:id",
    async (req, res, next) => {
        try {
            const { error } = await userModel.validateAsync(req.body);
            if (error) {
                res.status(400).json("Model validation error");
            } else if (req.params.id != req.body.id) {
                res.status(400).json("Model validation error. ID arguments not same.");
            } else {
                next();
            }
        } catch (error) {
            res.status(400).json(error);
        }
    },
    async (req, res) => {
        try {
            const { id } = req.params, user = await usersService.get(id);
            if (user) {
                await usersService.update(id, req.body);
                res.status(204).json();
            } else {
                res.status(404).json(`User ${id} not found.`);
            }
        } catch (error) {
            res.status(400).json(error);
        }
    }
);

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params, user = await usersService.get(id);
        if (user) {
            await usersService.remove(id);
            res.status(204).json();
        } else {
            res.status(404).json(`User ${id} not found.`);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
