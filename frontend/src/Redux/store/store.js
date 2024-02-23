import { configureStore } from '@reduxjs/toolkit'
import calcReducer from '../reducer/reducer';


const store = configureStore({
    reducer: calcReducer
},

);
export default store;