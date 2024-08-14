import { Router } from "express";
import { CreateUserController, DeleteUserByIdController, ListUserByIdController, ListUsersController, LoginUserController, UpdateUserByIdController } from "../controller/user";

class RouterUser {
  private router: Router

  constructor() {
    this.router = Router()
    this.router.post('/createUser', new CreateUserController().createUser)
    this.router.post('/listUsers', new ListUsersController().listUsers)
    this.router.post('/listUserById', new ListUserByIdController().listUserById)
    this.router.post('/deleteUserById', new DeleteUserByIdController().deleteUserById)
    this.router.post('/updateUserById', new UpdateUserByIdController().UpdateUserById)
    this.router.post('/loginUser', new LoginUserController().loginUser)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

