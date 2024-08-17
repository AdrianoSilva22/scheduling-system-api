import { Router } from "express";
import { CreateUserController, DeleteUserByIdController, ListUserByIdController, ListUsersController, LoginUserController, UpdateUserByIdController } from "../controller/user";
import { authorizeAccessForRole } from "../middlewares/authRole";
import { tokenUtils } from "../utils/authToken";
const { checkAuthenticatedToken } = tokenUtils()

class RouterUser {
  private router: Router

  constructor() { 
    this.router = Router()
    this.router.use(checkAuthenticatedToken);
    this.router.post('/createUser', authorizeAccessForRole('manager'), new CreateUserController().createUser)
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

