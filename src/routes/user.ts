import { Router } from "express";
import { CreateUserController, ListAllUsersController } from "../controller/user";

class RouterUser {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUser', new CreateUserController().createUser)
    this.router.post('/listUsers', new ListAllUsersController().getAllUsers)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

