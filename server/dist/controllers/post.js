"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const post_1 = __importDefault(require("../models/post"));
const createPost = (req, res, next) => {
    let { author, title } = req.body;
    const book = new post_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        author,
        title
    });
    return book
        .save()
        .then((result) => {
        return res.status(201).json({
            book: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return yield post_1.default.find()
        .exec()
        .then((posts) => {
        return res.status(200).json({
            books: posts,
            count: posts.length
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
    return res.status(200).json({
        books: 'test'
    });
});
exports.default = { createPost, getAllPosts };
//# sourceMappingURL=post.js.map