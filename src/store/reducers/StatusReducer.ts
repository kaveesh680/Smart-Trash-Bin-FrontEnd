import {StatusActionTypes} from "../types/StatusActionTypes";
import {SET_ROLE} from "../constants/StatusConstants";
import {IUser} from "../../types/types";

const initialState: userTypes = {
    user: null
}

interface userTypes {
    user: IUser | null
}

export const StatusReducer = (state: userTypes = initialState, action: StatusActionTypes) => {
    switch (action.type) {
        case SET_ROLE: {
            return {
                ...state, user: action.payload
            }
        }
        default:
            return state;
    }
}

