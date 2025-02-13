import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowplayingMovies:null,
        popularmovies:null,
        topratedmovies:null,
        upcommingmovies:null,
        toggle:false
    },
    reducers:{
        getnowplayingmovies:(state,action)=>{
state.nowplayingMovies=action.payload
        },
        getpopularplaying:(state,action)=>{
            state.popularmovies=action.payload
        },
        gettopratedmovies:(state,action)=>{
            state.topratedmovies=action.payload
        },
        getupcommingmovies:(state,action)=>{
            state.upcommingmovies=action.payload
        },
        settoggle:(state)=>{
            state.toggle=!state.toggle
        }
    }
})
export const {getnowplayingmovies,getpopularplaying,gettopratedmovies,getupcommingmovies,settoggle}=movieSlice.actions;
export default movieSlice.reducer;