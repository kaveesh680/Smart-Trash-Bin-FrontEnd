import {SET_ROLE} from "../constants/StatusConstants";
import {IUser} from "../../types/types";

export interface SetRoleType {
    type: typeof SET_ROLE
    payload: IUser | null
}

export type StatusActionTypes = SetRoleType;