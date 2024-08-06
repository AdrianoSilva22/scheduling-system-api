import { Router } from "express";
import { CreateAvailableScheduleController } from "../controller/availableSchedule";

class RouterAvailableSchedule {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('/createAvailableSchedule', new CreateAvailableScheduleController().createAvailableSchedule)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    RouterAvailableSchedule
}