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
exports.LogbooksController = void 0;
var common_1 = require("@nestjs/common");
var LogbooksController = /** @class */ (function () {
    function LogbooksController(logbooksService) {
        this.logbooksService = logbooksService;
    }
    LogbooksController.prototype.create = function (createLogbookDto) {
        return this.logbooksService.create(createLogbookDto);
    };
    LogbooksController.prototype.findAll = function () {
        return this.logbooksService.findAll();
    };
    LogbooksController.prototype.findOne = function (id) {
        return this.logbooksService.findOne(+id);
    };
    LogbooksController.prototype.update = function (id, updateLogbookDto) {
        return this.logbooksService.update(+id, updateLogbookDto);
    };
    LogbooksController.prototype.remove = function (id) {
        return this.logbooksService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], LogbooksController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], LogbooksController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LogbooksController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], LogbooksController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], LogbooksController.prototype, "remove");
    LogbooksController = __decorate([
        (0, common_1.Controller)('logbooks')
    ], LogbooksController);
    return LogbooksController;
}());
exports.LogbooksController = LogbooksController;
