"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Log = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Log = /** @class */ (function () {
    function Log() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "logbook");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "contest");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "myCallsign");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "myGrid");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirCall");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "rstSent");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "rstRcvd");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "startTime");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "endTime");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "notes");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirName");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirQTH");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirState");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirCounty");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirGrid");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "frequency");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "band");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "power");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "mode");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "myExch");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "theirExch");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "operator");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "isMultiplier");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "wasRunning");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "satellite");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslSentLOTW");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslSentQRZ");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslRcvdLOTW");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslRcvdQRZ");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslSentPhysical");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Log.prototype, "qslRcvdPhysical");
    Log = __decorate([
        (0, mongoose_1.Schema)()
    ], Log);
    return Log;
}());
exports.Log = Log;
