import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Post from '../models/post';

const createPost = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Post({
        _id: new mongoose.Types.ObjectId(),
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

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  
   return await  Post.find()
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
            books:'test'
        });
  
};

export default { createPost,getAllPosts };