import { configureStore } from "@reduxjs/toolkit";
import EmpSlice from "./EmpSlice";
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore({
    reducer:{
        empStore : EmpSlice
    }
},
composeWithDevTools()
)