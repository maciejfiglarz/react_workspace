"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controllers/post"));
const router = express_1.default.Router();
router.get('/', post_1.default.getAllPosts);
module.exports = router;
//# sourceMappingURL=post.js.map