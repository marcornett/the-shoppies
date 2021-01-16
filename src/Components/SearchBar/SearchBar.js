import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useStateValue } from '../../ContextAPI/StateProvider'
import { GETTING_DATA, ADD_MOVIE_DATA } from '../../ContextAPI/reducer'
import './SearchBar.css'

function SearchBar() {
    const [value, setValue] = useState('')
    const [,dispatch] = useStateValue()

    useEffect(()=>{
        const fetchMovieData = async () =>{
            const pattern = /\s/g
            let searchTerm = value.trim().replaceAll(pattern, '+')
            try{
                dispatch({
                    type: GETTING_DATA,
                    payload: true,
                    searchTerm: value
                })
                const response = await axios.get(
                    `http://www.omdbapi.com/?page=1&s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
                    )
                dispatch({
                    type: ADD_MOVIE_DATA,
                    payload: response.data,
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchMovieData()
    }, [dispatch, value])

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return (
        <div className="search_comp">
            <h3 className="title">Movie title</h3>
            <div className="search_icon">
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={value}
                    className="input_bar"
                    placeholder="Search movies"
                />
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default SearchBar
