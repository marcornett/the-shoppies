import React, { useState } from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import { ADD_NOMINEE } from '../../ContextAPI/reducer'
import { REMOVE_NOMINEE } from '../../ContextAPI/reducer'
import './MovieResults.css'

function MovieResults() {
    const [state, dispatch] = useStateValue()
    const [alertMessage, setAlertMessage] = useState('')

    const handleNominate = (e, title) =>{
        setAlertMessage('')
        if(!state.nominees.includes(title)){
            if(state.nominees.length < 5){
                dispatch({
                    type: ADD_NOMINEE,
                    payload: title
                })
            } else{
                setAlertMessage('*Only 5 movies can be nominated')
            }
        } else{
            setAlertMessage('*Movie already nominated')
        }
    }

    const handleRemove = (e, nominee) =>{
        dispatch({
            type: REMOVE_NOMINEE,
            payload: nominee,
        })
    }

    return (
        <div className="movie_results">
            <div className="search_results">
                <h2>Results for {state.searchTerm}</h2>
                <ul>
                    {state.movieData?.map((movie, i) => 
                            <li key={i}>
                                <span>{movie.Title}, {movie.Year} </span>
                                <br/>
                                <button 
                                    type="submit" 
                                    onClick={(e) => handleNominate(e, movie.Title)}>
                                    Nominate
                                </button>
                            </li>
                    )}
                </ul>
                <p>
                    {alertMessage || null}
                </p>
                <p>
                    {state.nominees.length === 5 ? 
                    "*Your movie nominations have been added!" 
                    : 
                    null}
                </p>
            </div>
            <div className="nominees">
                <h2>Nominees</h2>
                {state.nominees?.map((nominee, i) => 
                    <ul key={i}>
                        <li>
                            {nominee}
                            <br/>
                            <button onClick={(e) => handleRemove(e, nominee)}>
                                Remove
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
export default MovieResults