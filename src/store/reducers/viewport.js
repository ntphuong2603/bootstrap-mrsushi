import ACTIONS from "../actionType"

export default function viewport(state={}, action){
    switch (action.type){
        case ACTIONS.GET_VIEWPORT:
            return { ...state, ...action.payload}
        default:
            return state
    }
}