import useViewport from "../../tools/viewport";
import ACTIONS from "../actionType";

function GetViewport(){
    return useViewport()
}

export const getViewport = () => ({
    type: ACTIONS.GET_VIEWPORT,
    payload: {viewport: GetViewport()},
})