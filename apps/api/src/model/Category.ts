/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, Model, model } from 'mongoose';
import { CategoriesType } from '../@types/app-types';
import { removeFile } from '../utils/server-utils';

type CategoryModel = Model<CategoriesType>;

const CategorySchema = new Schema<
  CategoriesType,
  CategoryModel,
  CategoriesType
>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

CategorySchema.methods.toJSON = function () {
  const data = this;
  const category = data.toObject();
  category.id = category._id;
  delete category._id;
  delete category.__v;

  return category;
};

CategorySchema.pre('deleteOne', { document: true, query: false }, async function(next)  {
  removeFile(this.image_url);
});

const Category = model<CategoriesType, CategoryModel>(
  'category',
  CategorySchema
);
export default Category;
