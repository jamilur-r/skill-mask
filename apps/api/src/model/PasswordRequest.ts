import { Schema, Model, model } from "mongoose";
import { PasswordRequestType } from "../@types/app-types";

type PasswordRequestModel = Model<PasswordRequestType>

const PasswordRequestSchema = new Schema<
  PasswordRequestType,
  PasswordRequestModel,
  PasswordRequestType
>({
  uid: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  email: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
});

const PasswordRequest = model<PasswordRequestType, PasswordRequestModel>(
  "password_request",
  PasswordRequestSchema
);
export default PasswordRequest;
