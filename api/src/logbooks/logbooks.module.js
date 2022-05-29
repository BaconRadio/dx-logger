"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogbooksModule = void 0;
var common_1 = require("@nestjs/common");
var logbooks_service_1 = require("./logbooks.service");
var logbooks_controller_1 = require("./logbooks.controller");
var mongoose_1 = require("@nestjs/mongoose");
var logbook_schema_1 = require("./schemas/logbook.schema");
var LogbooksModule = /** @class */ (function () {
    function LogbooksModule() {
    }
    LogbooksModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: logbook_schema_1.Logbook.name, schema: logbook_schema_1.LogbookSchema }])],
            controllers: [logbooks_controller_1.LogbooksController],
            providers: [logbooks_service_1.LogbooksService]
        })
    ], LogbooksModule);
    return LogbooksModule;
}());
exports.LogbooksModule = LogbooksModule;
