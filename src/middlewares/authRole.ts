import { NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "..";

function authRole(role: string) {
    return (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
      if (req.user?.role !== role) {
        res.status(401);
        return res.send("not allowed");
      }
      next();
    }}
   