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
  ValidateRequest,
} from "../utils/server-utils";

export const CategortRouter = express.Router();

CategortRouter.get("/all", ValidateRequest, getAllCategories);
CategortRouter.get("/:id", ValidateRequest, getCategoryById);
CategortRouter.get("/count", ValidateRequest, getCategoryCount);

CategortRouter.post(
  "/",
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  upload.single("image"),
  createCategory
);
CategortRouter.post(
  "/update",
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  upload.single("image"),
  updateCategory
);
CategortRouter.post(
  "/delete",
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  deleteCategory
);
