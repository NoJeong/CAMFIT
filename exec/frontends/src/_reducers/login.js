import * as types from '../_actions/ActionTypes';

export default function login(state = {}, action) {
    switch(action.type) {
        case types.LOGIN:
            return {
                ...state, loginSuccess : action.payload
            }
        default:
            return state;
            
    }
}