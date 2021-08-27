declare namespace Express {
  export interface Request {
    ValidReq?: boolean;
    authenticated?: boolean;
  }
}
