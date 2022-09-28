export class UserDTO {
    constructor(
        public id: number,
        public username: string,
        public usertype: string,
        public password: string,
        public address: string,
        public phoneNumber: number,
        public email: string,
        public name: string,
        public surname: string
    ) {}
}