import { Router } from "express";
import { CreateUserController } from "../controller/user";

class RouterUser {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUser', new CreateUserController().createUser)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

