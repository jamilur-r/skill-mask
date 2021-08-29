/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { verify } from 'jsonwebtoken';
import * as multer from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { environment } from '../environments/environment';
import * as hbjs from 'handbrake-js';
import * as fs from 'fs';

const secret: string = process.env.secret || environment.secret;

export const ValidateRequest: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key: string | undefined | string[] = req.headers.key;
  if (key === secret) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Not allowed',
    });
  }
};

export const Tokenize: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorize = req.headers['authorization'];
  const token: undefined | string = authorize && authorize.split(' ')[1];

  if (token) {
    verify(token, secret, (err, user) => {
      if (err) {
        return res.status(401).json({
          msg: 'Not allowed',
        });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({
      msg: 'Not allowed',
    });
  }
};

export const CheckAdmin: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorize = req.headers['authorization'];
  const token: undefined | string = authorize && authorize.split(' ')[1];
  if (token) {
    verify(token, secret, (err, user) => {
      if (err) {
        return res.status(400).json({
          msg: 'Something went wrong',
        });
      } else if (user?.role === 'ADMIN') {
        next();
      } else {
        return res.status(401).json({
          msg: 'Not Allowed',
        });
      }
    });
  }
};

// FILE UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'media'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext);
  },
});

export const upload = multer({ storage: storage });

export const minifyVid = async (filePath: string): Promise<string> => {
  try {
    const out = filePath.split('.')[0] + '.mkv';

    const options = {
      input: path.join(__dirname, filePath),
      output: path.join(__dirname, out),
      preset: 'Very Fast 720p30',
    };
    hbjs
      .spawn(options)
      .on('error', console.error)
      .on('complete', () => {
        const loc = path.join(__dirname, filePath);
        fs.unlinkSync(loc);
      });
    return out;
  } catch (error) {
    console.log(error);

    return null;
  }
};
