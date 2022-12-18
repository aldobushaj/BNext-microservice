// classe modello di un utente (come è fatto un utente)
export class User{
    userId?: number;
    name?: string;
    surname?: string;
    birthDate?: Date;
    username?: string;
    password?: string;
    active?: number;
    roles?: string;
    permissions?: string;
    // mancano owenedCar, resevation e feedback
}
