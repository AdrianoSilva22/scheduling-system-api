import { Router } from "express";
import { CreateUserController, DeleteUserByIdController, ListUserByIdController, ListUsersController, UpdateUserByIdController } from "../controller/user";
import { authorizeAccessForRole } from "../middlewares/authRole";
import { checkAuthenticatedToken } from "../middlewares/authenticateUserToken";


class RouterUser {
  private router: Router

  constructor() { 
    this.router = Router()
    // this.router.use(checkAuthenticatedToken);

    this.router.post('/createUser', authorizeAccessForRole('manager', 'professional'), new CreateUserController().createUser)
    this.router.post('/listUsers', authorizeAccessForRole('manager') , new ListUsersController().listUsers)
    this.router.post('/listUserById', authorizeAccessForRole('manager'), new ListUserByIdController().listUserById)
    this.router.post('/deleteUserById', authorizeAccessForRole('manager'), new DeleteUserByIdController().deleteUserById)
    this.router.post('/updateUserById', authorizeAccessForRole('manager'), new UpdateUserByIdController().UpdateUserById)
  }

  getRouter(): Router {
    return this.router
  }

}

export {
  RouterUser
};

