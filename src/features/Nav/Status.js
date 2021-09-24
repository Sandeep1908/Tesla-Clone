import {createSlice} from '@reduxjs/toolkit'

const isStatus=createSlice({
    name:'Status',
    initialState:{
        value:false,
    },
    reducers:{
        show:(state)=>{
            state.value=true
        },
        hide:(state)=>{
            state.value=false;
        }
    }
})

export default isStatus.reducer;
export const{show,hide}=isStatus.actions
