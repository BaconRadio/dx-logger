"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.LogsController = void 0;
var common_1 = require("@nestjs/common");
var LogsController = /** @class */ (function () {
    function LogsController(logsService) {
        this.logsService = logsService;
    }
    LogsController.prototype.create = function (createLogDto) {
        return this.logsService.create(createLogDto);
    };
    LogsController.prototype.findAll = function () {
        return this.logsService.findAll();
    };
    LogsController.prototype.findOne = function (id) {
        return this.logsService.findOne(+id);
    };
    LogsController.prototype.update = function (id, updateLogDto) {
        return this.logsService.update(+id, updateLogDto);
    };
    LogsController.prototype.remove = function (id) {
        return this.logsService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], LogsController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], LogsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LogsController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], LogsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LogsController.prototype, "remove");
    LogsController = __decorate([
        (0, common_1.Controller)('logs')
    ], LogsController);
    return LogsController;
}());
exports.LogsController = LogsController;
