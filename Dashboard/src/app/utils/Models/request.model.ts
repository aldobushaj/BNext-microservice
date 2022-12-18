import { User } from "./user.model";

export interface Request {
	username: string;
	password: string;
	roles?: string;
	user?: User;
}
