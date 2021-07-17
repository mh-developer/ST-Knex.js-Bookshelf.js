const express = require("express");
const router = express.Router();
const locationsService = require("./services/locations.service");
const locationModel = require("./models/location.model");

router.get("/", async (req, res) => {
    try {
        const locations = await locationsService.getAll();
        res.status(200).json(locations);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params, location = await locationsService.get(id);
        if (location) {
            res.status(200).json(location);
        } else {
            res.status(404).json(`Location ${id} not found.`);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post(
    "/",
    async (req, res, next) => {
        try {
            const { error } = await locationModel.validateAsync(req.body);
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
            const location = await locationsService.create(req.body);
            res.status(201).json(location);
        } catch (error) {
            res.status(400).json(error);
        }
    }
);

router.put(
    "/:id",
    async (req, res, next) => {
        try {
            const { error } = await locationModel.validateAsync(req.body);
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
            const { id } = req.params, location = await locationsService.get(id);
            if (location) {
                await locationsService.update(id, req.body);
                res.status(204).json();
            } else {
                res.status(404).json(`Location ${id} not found.`);
            }
        } catch (error) {
            res.status(400).json(error);
        }
    }
);

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params, location = await locationsService.get(id);
        if (location) {
            await locationsService.remove(id);
            res.status(204).json();
        } else {
            res.status(404).json(`Location ${id} not found.`);
        }
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
