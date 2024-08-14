import { NextFunction, Request, Response } from "express";

function authRole(role: string) {
    return (req: Request, res: Response, next: NextFunction) => {
    //   if (req.user.role !== role) {
    //     res.status(401);
    //     return res.send("not allowed");
    //   }
      next();
    }}
   