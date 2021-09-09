import { hash } from 'bcryptjs';
import { Request, RequestHandler, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { environment } from '../environments/environment';
import PasswordRequest from '../model/PasswordRequest';
import User from '../model/User';

const secret: string = process.env.secret || environment.secret;

// SIGNIN
export const SignIn: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, pass } = req.body;
    const user = await User.findOne({ email: email });
    if (user !== null) {
      if (await user.comparePass(pass)) {
        const token = sign(
          { email: user.email, id: user._id, role: user.role },
          secret,
          {
            expiresIn: '7d',
          }
        );
        return res.status(200).json({
          token: token,
          user: user.toJSON(),
        });
      } else {
        return res.status(400).json({
          msg: 'Wrong password',
        });
      }
    } else {
      return res.status(400).json({
        msg: 'Wrong Email',
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// SIGNUP
export const SignUp: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist === null) {
      const user = new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });
      await user.save();
      const token = sign(
        { email: user.email, id: user._id, role: user.role },
        secret,
        {
          expiresIn: '7d',
        }
      );

      return res.status(200).json({
        token: token,
        user: user.toJSON(),
      });
    } else {
      return res.status(400).json({
        msg: 'user already exist',
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// confirm email
export const confirmEmail: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { uid } = req.params;
    await User.findOneAndUpdate({ _id: uid }, { email_confirmed: true });
    return res.status(200).json({
      msg: 'Email Confirmed',
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// user by id
export const getUserByid: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ _id: uid });
    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// user by email
export const getUserByEmail: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// request for password reset
export const requestPassReset: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, uid } = req.body;
    const code = Math.floor(1000 + Math.random() * 9000);
    const request = new PasswordRequest({
      email: email,
      code: code,
      uid: uid,
    });

    await request.save();
    return res.status(200).json({
      id: request._id,
      code: code,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

// reset password
export const resetPassword: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { code, id, password } = req.body;
    const request = await PasswordRequest.findOne({ _id: id });
    if (request?.code === code) {
      const haspass = await hash(password, 12);
      await User.findOneAndUpdate(
        { email: request?.email },
        { password: haspass }
      );
      await await PasswordRequest.findOneAndDelete({ _id: id });
      return res.status(200).json({
        msg: 'password reseted',
      });
    } else {
      return res.status(400).json({
        msg: 'failed to reset password',
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};
export const CreateAdmin: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    const user = new User({
      email,
      password,
      first_name,
      last_name,
      role: 'ADMIN',
      email_confirmed: true,
    });
    await user.save();

    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};

export const AdminSignin: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, pass } = req.body;
    const user = await User.findOne({ email: email });
    if (user !== null) {
      if (user.role === 'ADMIN') {
        if (await user.comparePass(pass)) {
          const token = sign(
            { email: user.email, id: user._id, role: user.role },
            secret,
            {
              expiresIn: '7d',
            }
          );

          return res.status(200).json({
            token: token,
            user: user,
          });
        } else {
          return res.status(400).json({
            msg: 'Wrong Pass',
          });
        }
      } else {
        return res.status(401).json({
          msg: 'Not Allowed',
        });
      }
    } else {
      return res.status(401).json({
        msg: 'Not Allowed',
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
};
