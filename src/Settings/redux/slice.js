import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../Utils";
const initialState = {
    countries: [],
    loader: getItem("loader") ? false : true,
    darkMode: getItem("darkMode") ? getItem("darkMode") : "light",
    region: null,
    searchCountries: [],
    bordersCountries: [],
    bordersCountriesData: []
}
export const slice = createSlice({
    name: "rest-countries",
    initialState,
    reducers:{
        setCountries(state, action){
            state.action = action.payload
        },
        setLoader(state, action){
            if(!action.payload){
                state.loader = !action.payload
                setTimeout(() => {
                    setItem("loader", "loader-end")
                    window.location.reload()
                }, 2000)    
            }
        },
        setDarkMode(state, action){
            state.darkMode = action.payload
            setItem("darkMode", action.payload)
        },
        setSearchCountries(state, action){
            state.searchCountries = action.payload  
        },
        setBordersCountries(state, action){
            state.bordersCountries = action.payload
        },
        setBorderCountriesData(state, action){
            state.bordersCountriesData = action.payload
        },
        setRegion(state, action){
            state.region = action.payload
        }
    }
})
export const Reducer = slice.reducer;
export const Action = slice.actions;