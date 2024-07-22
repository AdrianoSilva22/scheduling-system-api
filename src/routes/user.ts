import { Router } from "express";
import { CreateUserController, ListUserByIdController, ListUsersController, DeleteUserByIdController, UpdateUserByIdController } from "../controller/user";

class RouterUser {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUser', new CreateUserController().createUser)
    this.router.post('/listUsers', new ListUsersController().listUsers)
    this.router.post('/listUserById', new ListUserByIdController().listUserById)
    this.router.post('/deleteUserById', new DeleteUserByIdController().deleteUserById)
    this.router.post('/updateUserById', new UpdateUserByIdController().UpdateUserById)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

