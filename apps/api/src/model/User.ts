/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, Model, model } from "mongoose";
import { UserType } from "../@types/app-types";
import { hash, compare } from "bcryptjs";

type UserModel = Model<UserType>

const UserSchema = new Schema<UserType, UserModel, UserType>(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      default: "USER",
    },
    phone: {
      type: String,
      trim: true,
    },
    email_confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const data = this;
  const user = data.toObject();
  user.id = user._id;
  delete user._id;
  delete user.__v;

  return user;
};

UserSchema.pre("save", async function () {
  const user = this;
  const hashpass = await hash(user.password, 12);
  user.password = hashpass;
});

UserSchema.methods.compareEmail = async function (email): Promise<boolean> {
  const user = await User.findOne({ email: email });
  if (user) {
    return true;
  } else {
    return false;
  }
};
UserSchema.methods.comparePass = async function (password): Promise<boolean> {
  return await compare(password, this.password);
};



const User = model<UserType, UserModel>("users", UserSchema)
export default User;
