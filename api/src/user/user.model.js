"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    username: { type: String, required: true },
    name: { type: String, required: true }
});
