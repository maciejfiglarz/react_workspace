
import mongoose, { Schema } from 'mongoose';
// import logging from '../config/logging';
import IPost from '../interfaces/post';

const PostSchema: Schema = new Schema(
    {
        // _id: mongoose.Schema.Types.ObjectId,
        title: { type: String, required: true },
        // imageLink: { type: String, required: true },
        author: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

PostSchema.post<IPost>('save', function () {
    // logging.info('Mongo', 'Checkout the book we just saved: ', this);
    console.log('postDodano');
});

export default mongoose.model<IPost>('Post', PostSchema);





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