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
import { CheckAdmin, Tokenize, ValidateRequest } from "../utils/server-utils";

export const AuthRouter = express.Router();

AuthRouter.post("/signin", ValidateRequest, SignIn);
AuthRouter.post("/signup", ValidateRequest, SignUp);
AuthRouter.get("/email/confirm/:uid", ValidateRequest, confirmEmail);
AuthRouter.get("/user/id/:uid", ValidateRequest, Tokenize, getUserByid);
AuthRouter.get("/user/email/:email", ValidateRequest, Tokenize, getUserByEmail);
AuthRouter.post("/request/password-reset", ValidateRequest, requestPassReset);
AuthRouter.post("/reset-password", ValidateRequest, resetPassword);
AuthRouter.post("/admin/signin", ValidateRequest, AdminSignin);
AuthRouter.post(
  "/admin/add",
  ValidateRequest,
  Tokenize,
  CheckAdmin,
  CreateAdmin
);
