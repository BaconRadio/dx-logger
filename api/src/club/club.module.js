"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClubModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var club_controller_1 = require("./club.controller");
var club_service_1 = require("./club.service");
var club_model_1 = require("./club.model");
var ClubModule = /** @class */ (function () {
    function ClubModule() {
    }
    ClubModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Club', schema: club_model_1.ClubSchema }]),
            ],
            controllers: [club_controller_1.ClubController],
            providers: [club_service_1.ClubService]
        })
    ], ClubModule);
    return ClubModule;
}());
exports.ClubModule = ClubModule;
