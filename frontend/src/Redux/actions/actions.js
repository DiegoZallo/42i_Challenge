import { GET_TNS, GET_NCC, ERROR_TYPE } from "../actionTypes/actionTypes";
import axios from "axios"

export const get_TwoNumSum=({numbers, targetSum})=>{
    return async(dispatch) => {
        try {
            const arr = numbers.split(' ').map((number)=>Number(number));
            const result = (await axios(`/twoNumberSum?numbers=${arr}&targetSum=${targetSum}`)).data
            return dispatch({ 
                type: GET_TNS, 
                payload: result
            })    
        } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });  
        }
    }
}
export const get_NonConstChg=(coins)=>{
    return async (dispatch) => {
        try {            
            let arr = coins.trim().split(' ').map((coin)=>Number(coin)).sort((a, b)=> a-b)
            const result = (await axios(`/nonConstChg?coins=${arr}`)).data
            return dispatch({ 
                type: GET_NCC, 
                payload: result
            });
        } catch (error) {
            return dispatch({
                type: ERROR_TYPE, 
                payload: error.message, 
            });  
        }
    }
}
