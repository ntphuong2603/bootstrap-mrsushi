import ACTIONS from "../actionType";

export default function MenuReducer(state={}, action){
    switch (action.type){
        case (ACTIONS.GET_CATEGORY):
            return { ...state, ...action.payload}
        case (ACTIONS.GET_MENUS):
            return { ...state, ...action.payload}
        case (ACTIONS.GET_CATEGORIES_MENUS):
            return { ...state, ...action.payload}
        case (ACTIONS.GET_MENU_BY_CATEGORY):
            return { ...state, ...action.payload }
        case (ACTIONS.GET_MENU_BY_CUSTOMER):
            return { ...state, ...action.payload }
        case (ACTIONS.GET_MENU_BY_BOTH):
            return { ...state, ...action.payload }
        default:
            return state;
    }
}