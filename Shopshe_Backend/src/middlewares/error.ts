import { Response, Request, NextFunction } from "express";

export const errorMiddleWare = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error ";

  return res.status(400).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch = (func: ControllerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next));
  };
};
