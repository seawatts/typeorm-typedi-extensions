"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
var typeorm_1 = require("typeorm");
var typedi_1 = require("typedi");
var Post_1 = require("../entity/Post");
var InjectRepository_1 = require("../../../src/decorators/InjectRepository");
var InjectManager_1 = require("../../../src/decorators/InjectManager");
var PostRepository = /** @class */ (function () {
    function PostRepository(InjectRepository) {
        this.InjectRepository = InjectRepository;
    }
    PostRepository.prototype.saveUsingRepository = function (post) {
        return this.InjectRepository.save(post);
    };
    PostRepository.prototype.saveUsingManager = function (post) {
        return this.entityManager.save(post);
    };
    PostRepository.prototype.findAll = function () {
        return this.InjectRepository.find();
    };
    __decorate([
        InjectManager_1.InjectManager(),
        __metadata("design:type", typeorm_1.EntityManager)
    ], PostRepository.prototype, "entityManager", void 0);
    PostRepository = __decorate([
        typedi_1.Service(),
        __param(0, InjectRepository_1.InjectRepository(Post_1.Post)),
        __metadata("design:paramtypes", [typeorm_1.Repository])
    ], PostRepository);
    return PostRepository;
}());
exports.PostRepository = PostRepository;
//# sourceMappingURL=PostRepository.js.map