import * as types from '../_actions/ActionTypes';

export default function emailcheck(state = {}, action) {
    // console.log(action.payload,'1231241231')
    if(action.type === types.EMAILCHECK) {
        return {
            ...state,
            emailSuccess :action.payload
        };
    } else {
        return state;
    }
}