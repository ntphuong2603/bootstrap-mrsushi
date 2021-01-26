import ACTIONS from "../actionType";
import * as apiMenu from '../../api/menuApis'

export const getCategories = () => ({
    type: ACTIONS.GET_CATEGORY,
    payload: apiMenu.getCategories()
})

export const getMenus = () => ({
    type: ACTIONS.GET_MENUS,
    payload: apiMenu.getMenus()
})

export const getCategories_Menus = () => ({
    type: ACTIONS.GET_CATEGORIES_MENUS,
    payload: apiMenu.getCategories_Menus()
})

export const getMenuByCategory = (cat='') => ({
    type: ACTIONS.GET_MENU_BY_CATEGORY,
    payload: {category: 'list of menus by category'}
})

export const getMenuByCustomer = (cus='') => ({
    type: ACTIONS.GET_MENU_BY_CUSTOMER,
    payload: {customer: 'list of menus by customers'}
})

export const getMenuByBoth = (both='') => ({
    type: ACTIONS.GET_MENU_BY_BOTH,
    payload: {both: 'list of menus by category & customers'}
})