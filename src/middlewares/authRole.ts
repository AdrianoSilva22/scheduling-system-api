import { NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "..";

function authorizeAccessForRole(roleA: string, roleB?: string, roleC?: string) {
    return (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
      if (![roleA, roleB, roleC].includes(req.user?.role)) {
        res.status(401);
        return res.send(`Usuário com o Cargo ${req.user?.role} não tem permissão para esta ação.`);
      }
      next();
    }}
   
    export {
      authorizeAccessForRole
    }