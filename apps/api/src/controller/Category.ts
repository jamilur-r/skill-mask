import { Request, RequestHandler, Response } from 'express';
import Category from '../model/Category';
import * as fs from 'fs';
import * as path from 'path';

export const getAllCategories: RequestHandler = async (_, res: Response) => {
  try {
    const data = await Category.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ msg: 'Not found any' });
  }
};

export const getCategoryById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params;
    const data = await Category.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ msg: 'Not found any' });
  }
};

export const createCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, description } = req.body;
    const image_url = '/media/' + req.file?.filename;

    const category = new Category({
      name: name,
      description: description,
      image_url: image_url,
    });

    await category.save();
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);

    return res.status(400).json({ msg: 'Failed to create' });
  }
};

export const updateCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, name, description } = req.body;
    if (req.file) {
      const image_url = '/media/' + req.file?.filename;
      const category = await Category.findOneAndUpdate(
        { _id: id },
        { name: name, description: description, image_url: image_url }
      );
      return res.status(200).json(category);
    } else {
      const category = await Category.findOneAndUpdate(
        { _id: id },
        { name: name, description: description }
      );
      return res.status(200).json(category);
    }
  } catch (error) {
    return res.status(400).json({ msg: 'Failed to update' });
  }
};

export const deleteCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, } = req.body;
    const category = await Category.findOne({ _id: id });
    await category.deleteOne();
    // const loc = path.join(__dirname, image_url);
    // fs.unlinkSync(loc);

    return res.status(200).json({ msg: 'Category deleted' });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ msg: 'Failed to delete' });
  }
};

export const getCategoryCount: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const count = await Category.count();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(400).json({ msg: 'Failed to get count' });
  }
};
