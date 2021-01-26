import { combineReducers } from "redux";
import viewport from './viewport'
import menus from './menuReducers'

const index = combineReducers({
    viewport,
    menus,
})

export default index