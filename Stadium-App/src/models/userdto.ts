export class UserDTO {
    public id!: number;
    public username!: string;
    public usertype!: string;
    public password!: string;
    public address!: string;
    public phone_number!: string;
    public email!: string;
    public name!: string;
    public surname!: string;
    public propic!: Blob;
    public editing!: boolean;
    constructor(
    ) {}
}
