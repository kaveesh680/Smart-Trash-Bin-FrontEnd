import {SET_ROLE} from "../constants/StatusConstants";
import {SetRoleType} from "../types/StatusActionTypes";
import {IUser} from "../../types/types";

export const setUserRole = (user:IUser | null): SetRoleType => {
    return {
        type:SET_ROLE,
        payload:user
    }
}