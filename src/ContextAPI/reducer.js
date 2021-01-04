export const ADD_MOVIE_DATA = 'ADD_MOVIE_DATA'
export const ADD_NOMINEE = 'ADD_NOMINEE'
export const intialState = {
    movieData: {},
    searchTerm: '',
    nominees: [],
}

export default function reducer(state = intialState, action){
    switch (action.type){
        case ADD_MOVIE_DATA:
            return{
                ...state,
                movieData: action.payload,
                searchTerm: action.searchTerm
            }
        case ADD_NOMINEE:
                return{
                    ...state,
                    nominees: [...state.nominees, action.payload]
                }
        default:
            return state
    }
}