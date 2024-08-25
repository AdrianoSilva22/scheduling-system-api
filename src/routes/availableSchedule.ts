import { Router } from "express"
import { CreateAvailableScheduleController, DeleteAvailableScheduleByIdController, ListAvailableScheduleByIdController, ListAvailableSchedulesController, UpdateAvailableScheduleByIdController } from "../controller/availableSchedule"
import { authorizeAccessForRole } from "../middlewares/authRole"
import { checkAuthenticatedToken } from "../middlewares/authenticateUserToken"

class RouterAvailableSchedule {
    private router: Router

    constructor() { 
        this.router = Router()
        this.router.use(checkAuthenticatedToken);
    
        this.router.post('/createAvailableSchedule', authorizeAccessForRole('manager', 'professional'), new CreateAvailableScheduleController().createAvailableSchedule)
        this.router.post('/listAvailableSchedules', authorizeAccessForRole('manager') , new ListAvailableSchedulesController().listAvailableSchedules)
        this.router.post('/listAvailableScheduleById', authorizeAccessForRole('manager'), new ListAvailableScheduleByIdController().listAvailableScheduleById)
        this.router.post('/deleteAvailableScheduleById', authorizeAccessForRole('manager'), new DeleteAvailableScheduleByIdController().deleteAvailableScheduleById)
        this.router.post('/updateAvailableScheduleById', authorizeAccessForRole('manager'), new UpdateAvailableScheduleByIdController().UpdateAvailableScheduleById)
      }

    getRouter(): Router {
        return this.router
    }
}

export {
    RouterAvailableSchedule
}