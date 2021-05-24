import * as types from '../_actions/ActionTypes';

export default function Articledetail(state = initialState, action) {
  switch(action.type){
    case types.ARTICLEDETAIL:
        return {...State}
    // case DELETE:
    //   return {
    //     ...state, boards: state.boards.filter( post => post.id !== action.postId)
    //   }
    // case SELECTED:
    //   return {
    //     ...state, selected: state.boards.find(post => post.id === action.postId)
    // }
    // default:
    //   return state;
  }
}