import { Router } from "express";
import { authorizeAccessForRole } from "../middlewares/authRole";
import { checkAuthenticatedToken } from "../middlewares/authenticateUserToken";
import { CreateSchedulingController, DeleteSchedulingByIdController, ListSchedulingByIdController, ListSchedulingsController, UpdateSchedulingByIdController } from "../controller/scheduling";

class RouterScheduling {
    private router: Router

    constructor() { 
        this.router = Router()
        this.router.use(checkAuthenticatedToken);
    
        this.router.post('/createScheduling', authorizeAccessForRole('manager', 'professional', 'client'), new CreateSchedulingController().createScheduling)
        this.router.post('/listSchedulings', authorizeAccessForRole('manager') , new ListSchedulingsController().listSchedulings)
        this.router.post('/listSchedulingById', authorizeAccessForRole('manager'), new ListSchedulingByIdController().listSchedulingById)
        this.router.post('/deleteSchedulingById', authorizeAccessForRole('manager'), new DeleteSchedulingByIdController().deleteSchedulingById)
        this.router.post('/updateSchedulingById', authorizeAccessForRole('manager'), new UpdateSchedulingByIdController().UpdateSchedulingById)
      }
      
    getRouter(): Router {
        return this.router
    }
}

export {
    RouterScheduling
}