import { createSlice } from '@reduxjs/toolkit'
import datamovie from '../Component/Request'
const initialState = {
    movie: [],
    filtermovies: [],
    searchTerm: '',
    watchLetter: [],
    currentPage: 1,
    pageSize: 5
}

const MoviceSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getallapi(state, action) {
            state.movie = action.payload
        },
        addtowatchletter(state, action) {
            const movieToAdd = action.payload;
            const onetimeadd = state.watchLetter.some(movie => movie.id === movieToAdd.id);
            if (!onetimeadd) {
                state.watchLetter.push(action.payload);
            }
        },
        removetowatchletter: (state, action) => {
            state.watchLetter = state.watchLetter.filter(item => item.id !== action.payload)
            return state.watchLetter.find(item => item.id === action.payload)
        },
        filtermovie(state, action) {
            state.searchTerm = action.payload.toLowerCase();
            state.filtermovies = state.movie.filter(product =>
                product.movie.toLowerCase().includes(state.searchTerm)
            );
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }

})

export const { getallapi, filtermovie, addtowatchletter, removetowatchletter, setCurrentPage } = MoviceSlice.actions

export const moviedata = () => {
    return async dispatch => {
        const data = await datamovie.getAll()
        dispatch(getallapi(data))
    }
}
export default MoviceSlice.reducer