import { UserDTO } from "./userdto";

export class EventDTO {
    constructor(
        public id: number,
        public userId: UserDTO,
        public placesAvailable: number,
        public name: string,
        public eventName: string,
        public eventDate: Date,
        public stadiumName: string,
        public maxCapacity: number,
    ) {
    }
}