const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const controllerUsuasrios

router.get("/health", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: "ok Usuarios" });
    res.end();
});

router.get("/obtener_usuarios", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: "ok obtener usuarios" });
    res.end();
});

module.exports = router;