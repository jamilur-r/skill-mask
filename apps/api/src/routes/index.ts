import * as express from "express";
import { AuthRouter } from "./Auth";
import { CategortRouter } from "./Category";

export const RootRouter = express.Router();

RootRouter.use("/auth", AuthRouter);
RootRouter.use("/category", CategortRouter);
