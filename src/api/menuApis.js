import axios from 'axios'

const URL = 'http://localhost:5000'

export const getCategories_Menus = async () => {
    try{
        const res_menus = await axios.get(`${URL}/menus`)
        const res_cats = await axios.get(`${URL}/categories`)

        if (res_menus.data && res_cats.data){
            return {
                categories: res_cats.data,
                menus: res_menus.data
            }
        }
    } catch (error) {
        throw error;
    }
}

export const getMenus = async (cat='') => {
    try{
        const res = await axios.get(`${URL}/menus${cat.length===0?'':`?cat=${cat}`}`)
        // if (cat.length===0){
        //     const res = await axios.get(`${URL}/menus`)
        // } else {
        //     const res = await axios.get(`${URL}/menus?cat=${cat}`)
        // }
        if (res.data){
            return {
                menus: res.data
            }
        }
    } catch (error) {
        throw error;
    }
}

export const getCategories = async () => {
    try {

        const res = await axios.get(`${URL}/categories`)
        if (res.data){
            return {
                categories: res.data
            }
        }

    } catch (error){
        throw error;
    }
}