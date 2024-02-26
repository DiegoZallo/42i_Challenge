import { GET_TNS, GET_NCC, ERROR_TYPE } from "../actionTypes/actionTypes";
import axios from "axios"

export const get_TwoNumSum=({numbers, targetSum})=>{
    return async(dispatch) => {
        try {
            const arr = numbers.split(' ').map((number)=>{
                let num = Number(number);
                if (isNaN(num)) {
                    throw new Error("Invalid NUMBER value: " + number);
                }
                return num;
            });
            const result = (await axios.post('/twoNumberSum', {numbers: arr, targetSum: targetSum})).data
            return dispatch({ 
                type: GET_TNS, 
                payload: result
            })    
        } catch (error) {
            let errorMessage = error.message;
            if (error.response && error.response.data) {
                errorMessage = error.response.data.error || error.response.data;
            }
            return dispatch({
                type: ERROR_TYPE, 
                payload: errorMessage, 
            });  
        }
    }
}
export const get_NonConstChg=(coins)=>{
    return async (dispatch) => {
        try {            
            let arr = coins.trim().split(' ').map((coin)=>{
                let num = Number(coin);
                if (isNaN(num)) {
                    throw new Error("Invalid COIN value: " + coin);
                }
                return num;
            }).sort((a, b)=> a-b)
            const result = (await axios.post('/nonConstChg', {coins: arr})).data
            return dispatch({ 
                type: GET_NCC, 
                payload: result
            });
        } catch (error) {
            let errorMessage = error.message;
            if (error.response && error.response.data) {
                errorMessage = error.response.data.error || error.response.data;
            }
            return dispatch({
                type: ERROR_TYPE, 
                payload: errorMessage, 
            });  
        }
    }
}
