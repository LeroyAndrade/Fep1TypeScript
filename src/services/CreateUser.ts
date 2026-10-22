import type {User} from "../interfaces/User";

export class createUser {

    public async createThisUser(user: User): Promise<User> {
        const userId = user.userId;
        const naam = user.naam;
        const saldo = user.saldo;

        return {
            userId: userId,
            naam: naam, 
            saldo: saldo
        };
    }
}


