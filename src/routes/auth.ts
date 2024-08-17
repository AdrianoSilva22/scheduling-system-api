import { Router } from "express";
import { CreateUserController, DeleteUserByIdController, ListUserByIdController, ListUsersController, LoginUserController, UpdateUserByIdController } from "../controller/user";
import { authorizeAccessForRole } from "../middlewares/authRole";
import { tokenUtils } from "../utils/authToken";
const { checkAuthenticatedToken } = tokenUtils()

class RouterAuthUser {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.post('/loginUser', new LoginUserController().loginUser)
    }

    getRouter(): Router {
        return this.router
    }

}

export {
    RouterAuthUser
};

