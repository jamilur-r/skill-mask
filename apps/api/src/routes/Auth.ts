import * as express from "express";
import {
  AdminSignin,
  confirmEmail,
  CreateAdmin,
  getUserByEmail,
  getUserByid,
  requestPassReset,
  resetPassword,
  SignIn,
  SignUp,
} from "../controller/Auth";
import { CheckAdmin, Tokenize } from "../utils/server-utils";

export const AuthRouter = express.Router();

AuthRouter.post("/signin", SignIn);
AuthRouter.post("/signup", SignUp);
AuthRouter.get("/email/confirm/:uid", confirmEmail);
AuthRouter.get("/user/id/:uid", Tokenize, getUserByid);
AuthRouter.get("/user/email/:email", Tokenize, getUserByEmail);
AuthRouter.post("/request/password-reset", requestPassReset);
AuthRouter.post("/reset-password", resetPassword);
AuthRouter.post("/admin/signin", AdminSignin);
AuthRouter.post(
  "/admin/add",
  Tokenize,
  CheckAdmin,
  CreateAdmin
);
