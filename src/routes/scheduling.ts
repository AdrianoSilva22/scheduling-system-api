import { Router } from "express";
import { CreateSchedulingController } from "../controller/scheduling";

class RouterScheduling {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('/createScheduling', new CreateSchedulingController().createScheduling)
    }
    getRouter(): Router {
        return this.router
    }
}

export {
    RouterScheduling
}