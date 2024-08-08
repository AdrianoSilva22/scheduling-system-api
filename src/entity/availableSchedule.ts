import { SchedulingEntity } from "./scheduling";

class AvailableScheduleEntity {
    ID: string;
    dateTime: Date;
    scheduling?: SchedulingEntity | null
    createdAt: Date;
    updatedAt: Date;

    constructor(ID: string, dateTime: Date, scheduling: SchedulingEntity | null, createdAt: Date, updatedAt: Date) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.scheduling = scheduling
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export {
    AvailableScheduleEntity
};
