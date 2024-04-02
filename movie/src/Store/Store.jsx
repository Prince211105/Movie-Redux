import { configureStore } from "@reduxjs/toolkit";
import moviereducer from "./Movieslice";
const store = configureStore({
    reducer: {
        movie: moviereducer
    }
})

export default store