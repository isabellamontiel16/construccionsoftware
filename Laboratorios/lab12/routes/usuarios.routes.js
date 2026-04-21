const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

module.exports.getAllUsers = async(req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200)
        .json({ status: "success",
                message:"Get all users"
            });
    res.end();
}