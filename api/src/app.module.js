"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var config_1 = require("@nestjs/config");
var mongoose_1 = require("@nestjs/mongoose");
var user_module_1 = require("./user/user.module");
var club_module_1 = require("./club/club.module");
var station_module_1 = require("./station/station.module");
var satellight_module_1 = require("./satellight/satellight.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ envFilePath: ".env" }),
                mongoose_1.MongooseModule.forRoot("mongodb+srv://".concat(process.env.DB_USERNAME, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_URL)),
                user_module_1.UserModule,
                club_module_1.ClubModule,
                station_module_1.StationModule,
                satellight_module_1.SatellightModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
