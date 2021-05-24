import * as types from '../_actions/ActionTypes';

export default function selftrainlist(state = {}, action) {
    // console.log(action)
    switch(action.type) {
        case types.SELFTRAINLIST:
            return {
                ...state, list : action.payload
            }
        case types.SELFTRAINDETAIL:
            return {
                ...state, info : action.payload
            }
        default:
            return state;
            
    }
}