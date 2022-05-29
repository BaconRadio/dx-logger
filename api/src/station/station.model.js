"use strict";
exports.__esModule = true;
exports.StationSchema = void 0;
var mongoose = require("mongoose");
exports.StationSchema = new mongoose.Schema({
    // This uses Javascript var types and not Typescript types
    stationName: { type: String, required: true },
    dxcc: { type: String, required: true },
    gridSquare: { type: String, required: true },
    notes: { type: String, required: true }
});
