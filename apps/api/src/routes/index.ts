import * as express from "express";
import { AuthRouter } from "./Auth";
import { CategortRouter } from "./Category";
import { CourseRouter } from "./Course";
import { LessonRouter } from "./lesson";

export const RootRouter = express.Router();

RootRouter.use("/auth", AuthRouter);
RootRouter.use("/category", CategortRouter);
RootRouter.use("/course", CourseRouter);
RootRouter.use("/lesson", LessonRouter);
