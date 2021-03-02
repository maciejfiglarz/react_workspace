"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const PostSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    title: { type: String, required: true },
    imageLink: { type: String, required: true },
    content: { type: String, required: true }
}, {
    timestamps: true
});
PostSchema.post('save', function () {
    // logging.info('Mongo', 'Checkout the book we just saved: ', this);
    console.log('postDodano');
});
exports.default = mongoose_1.default.model('Post', PostSchema);
// const mongoose = require("mongoose");
// const postSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   title: String,
//   titleTop: String,
//   content: String,
//   type: String,
//   photo: String,
//   link: String,
//   linkPhoto: String,
//   linkSiteName: String,
//   youtube: String,
//   graphicId: String,
//   voteNumber: { type: Number, default: 0 },
//   isActive: { type: Boolean, default: true },
//   isWaitingRoom: { type: Boolean, default: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });
// module.exports = mongoose.model("Post", postSchema);
//# sourceMappingURL=post.js.map