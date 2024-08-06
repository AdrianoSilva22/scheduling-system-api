import { Router } from "express";
import { CreateSchedulingController } from "../controller/scheduling";

class RouterSheduling {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('createScheduling', new CreateSchedulingController().createAvailableSchedule)
    }
    getRouter(): Router {
        return this.router
    }
}

export {
    RouterSheduling
}