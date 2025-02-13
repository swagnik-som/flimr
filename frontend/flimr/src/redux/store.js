import {configureStore} from '@reduxjs/toolkit'
import userslice  from './useSlice.js'
import movieSlice from './movieSlice.js'
const store=configureStore({
    reducer:{
app:userslice,
movie:movieSlice
    },
})
export default store