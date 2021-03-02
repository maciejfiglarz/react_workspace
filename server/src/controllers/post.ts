import { Request, Response } from 'express';


import{ PostService} from "../services/post";
const postService =  new PostService();

export let getAll = async (req: Request, res: Response) => {
  const { body } = req;
  const postService =  new PostService();

  const data = await postService.fetchAll();
  const success = data ? true : false;
  res.status(200).json({ success, data });
};
