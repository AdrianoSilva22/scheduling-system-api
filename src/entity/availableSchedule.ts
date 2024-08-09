import { SchedulingEntity } from "./scheduling";

class AvailableScheduleEntity {
    ID: string;
    dateTime: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(ID: string, dateTime: Date, createdAt: Date, updatedAt: Date) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export {
    AvailableScheduleEntity
};
