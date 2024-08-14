import { NextFunction, Request, Response } from "express";

export function authUser(req: Request, res: Response, next: NextFunction) {
    // if (req.user == null) {
    //   res.status(403);
    //   return res.send("you need to sign in ");
    // }
    next();
   }
   