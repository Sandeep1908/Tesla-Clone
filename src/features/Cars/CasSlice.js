import {createSlice} from'@reduxjs/toolkit';


const carSlice=createSlice({
    name:'car',
    initialState:{
        cars:['Model S','Model Y','Model X','Model 3','Solar Roof','Solar Pannel']
    },
    reducers:{}
})

export const selectCar=state=>state.car.cars;
export default carSlice.reducer;