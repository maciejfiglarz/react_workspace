import { Request, Response } from 'express';


import{ PostService} from "../services/post";

export let pagination = async (req: Request, res: Response) => {
    const perPage = 10;
    const { body } = req;
    const { page, params } = body;

    const postService = new PostService();
    const result = await postService.pagination(page, perPage, params);
    console.log('result',result);
    res.status(201).json(result);
};

export let getAll = async (req: Request, res: Response) => {
  const { body } = req;
  const postService =  new PostService();

  const data = await postService.fetchAll();
  const success = data ? true : false;
  res.status(200).json({ success, data });
};

export let insertPost = async (req: Request, res: Response) => {
  const { body } = req;

  const postService = new PostService();
  const result = await postService.insertPost(body);
  const { success } = result;
  console.log('insertPost',result);
  res.status(200).json({ success });
};

