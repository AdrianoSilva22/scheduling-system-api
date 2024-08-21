import { Router } from "express";
import { CreateAvailableScheduleController } from "../controller/availableSchedule";
import { checkAuthenticatedToken } from "../middlewares/authenticateUserToken";

class RouterAvailableSchedule {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.use(checkAuthenticatedToken);

        this.router.post('/createAvailableSchedule', new CreateAvailableScheduleController().createAvailableSchedule)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    RouterAvailableSchedule
}