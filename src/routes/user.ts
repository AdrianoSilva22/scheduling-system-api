import { Router } from "express";
import { CreateUserController, ListUserByIdController, ListUsersController } from "../controller/user";

class RouterUser {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUser', new CreateUserController().createUser)
    this.router.post('/listUsers', new ListUsersController().listUsers)
    this.router.post('/listUserById', new ListUserByIdController().listUserById)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

