export const ADD_MOVIE_DATA = 'ADD_MOVIE_DATA'
export const intialState = {
    movieData: {},
    searchTerm: ''
}

export default function reducer(state = intialState, action){
    switch (action.type){
        case "ADD_MOVIE_DATA":
            return{
                ...state,
                movieData: action.payload,
                searchTerm: action.searchTerm
            }
        default:
            return state
    }
}