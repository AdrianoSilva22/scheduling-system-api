import { Router } from "express";
import { AuthController } from "../controller/auth";

class RouterAuthUser {
    private router: Router

    constructor() {
        this.router = Router()

        this.router.post('/authUser', new AuthController().AuthUser)
    }

    getRouter(): Router {
        return this.router
    }

}

export {
    RouterAuthUser
};

