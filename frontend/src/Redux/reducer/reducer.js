import { GET_NCC, GET_TNS, ERROR_TYPE } from "../actionTypes/actionTypes";

const initialState = {
    nccResult: 0,
    tnsResult: [],
    global_Error:''
}

const calcReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_TNS:
            return {...state,
                    tnsResult: action.payload}

        case GET_NCC:
            return {...state,
                    nccResult: action.payload}

        case ERROR_TYPE:
            return {
                ...state,
                global_Error: action.payload
            }
    
        default:
            return {...state};
    }
};
export default calcReducer;