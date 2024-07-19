// menuAction.js in the actions folder 

import axios from "axios";
// importing action types
import {
    GET_MENU_REQUEST,
    GET_MENU_SUCCESS,
    GET_MENU_FAIL,
} from "../constants/menuConstants";

// this func will get or fetch data from server 
// it takes another func that dispatch arguments to the redux store

export const getMenus = (id) => async(dispatch) => {
    try{
        dispatch({
            type: GET_MENU_REQUEST
        });
        const response = await axios.get(`/api/v1/eats/stores/${id}/menus`)
        
        dispatch({
            type:GET_MENU_SUCCESS,
            payload: response.data.data[0].menu
        });
    }
    catch (error){
        dispatch({
            type:GET_MENU_FAIL,
            payload:error.message,
        })
    }
};