"use strict";
exports.__esModule = true;
exports.ClubSchema = void 0;
var mongoose = require("mongoose");
exports.ClubSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    clubName: { type: String, required: true }
});
