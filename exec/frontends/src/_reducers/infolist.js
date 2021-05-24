import * as types from '../_actions/ActionTypes';

export default function infolist(state = {}, action) {
    // console.log(action.payload,'1231241231')
    switch(action.type) {
        case types.INFO:
            return {
                ...state,
                infolist :action.payload
            };

        case types.INFODETAIL:
            return {
                ...state,
                infodetail :action.payload
            };
        default:
            return state;
            
            
    }
}