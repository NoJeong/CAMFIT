import * as types from '../_actions/ActionTypes';

const initialState = {
    username: '',
    password: '',
    passwordcheck: '',
    category: '1',
    nickname: '',
};

export default function signup(state = initialState, action) {
    // console.log(action.payload,'1231241231')
    if(action.type === types.SIGNUP) {
        return {
            ...state,
            signupSuccess :action.payload
        };
    } else {
        return state;
    }
}