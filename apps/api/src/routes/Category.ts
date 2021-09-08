import * as express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  getCategoryCount,
  updateCategory,
} from "../controller/Category";
import {
  CheckAdmin,
  Tokenize,
  upload,
  
} from "../utils/server-utils";

export const CategortRouter = express.Router();

CategortRouter.get("/all",  getAllCategories);
CategortRouter.get("/:id",  getCategoryById);
CategortRouter.get("/count",  getCategoryCount);

CategortRouter.post(
  "/",
  
  Tokenize,
  CheckAdmin,
  upload.single("image"),
  createCategory
);
CategortRouter.post(
  "/update",
  
  Tokenize,
  CheckAdmin,
  upload.single("image"),
  updateCategory
);
CategortRouter.post(
  "/delete",
  
  Tokenize,
  CheckAdmin,
  deleteCategory
);
