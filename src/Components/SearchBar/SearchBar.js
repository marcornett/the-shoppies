import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './SearchBar.css'

function SearchBar() {
    const [value, setValue] = useState('')
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        const fetchMovieData = async () =>{
            const pattern = /\s/g
            let searchTerm = value.trim().replaceAll(pattern, '+')
            try{
                const response = await axios.get(
                    `http://www.omdbapi.com/?t=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
                    )
                setMovie(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchMovieData()
    }, [value])

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return (
        <div>
            <h2 className="title">Movie title</h2>
            <input 
                type="text" 
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default SearchBar
