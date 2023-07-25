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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let BlogService = exports.BlogService = class BlogService {
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async findAll() {
        return await this.blogModel.find();
    }
    async findOne(id) {
        return await this.blogModel.findOne({ _id: id });
    }
    async create(blog) {
        const newBlog = new this.blogModel(blog);
        return await newBlog.save();
    }
    async delete(id) {
        const deleteBlog = await this.blogModel.findByIdAndRemove(id);
        if (deleteBlog) {
            return 'Blog deleted successfully';
        }
        else {
            return 'Blog not found';
        }
    }
    async update(id, blog) {
        return await this.blogModel.findByIdAndUpdate(id, blog, { new: true });
    }
};
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Blog')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BlogService);
//# sourceMappingURL=blog.service.js.map