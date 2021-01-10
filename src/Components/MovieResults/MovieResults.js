import React, { useState } from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import { ADD_NOMINEE } from '../../ContextAPI/reducer'
import { REMOVE_NOMINEE } from '../../ContextAPI/reducer'
import './MovieResults.css'

function MovieResults() {
    const [state, dispatch] = useStateValue()
    const [alertMessage, setAlertMessage] = useState([])

    const handleNominate = (e, title) =>{
        setAlertMessage('')
        if(!state.nominees.includes(title)){
            if(state.nominees.length < 5){
                dispatch({
                    type: ADD_NOMINEE,
                    payload: title
                })
            } else{
                setAlertMessage('Only 5 movies can be nominated')
            }
        } else{
            setAlertMessage('Movie already nominated')
        }
    }

    const handleRemove = (e, nominee) =>{
        dispatch({
            type: REMOVE_NOMINEE,
            payload: nominee,
        })
    }

    return (
        <div>
            <div className="search_results">
                <h2>Results for {state.searchTerm}</h2>
                <ul>
                    {state.movieData?.Search?.map((movie, i) => 
                        <li key={i}>
                            <span>{movie.Title}, {movie.Year} </span>
                            <input type="submit" onClick={(e) => handleNominate(e, movie.Title)} value="Nominate"/>
                        </li>
                    )}
                </ul>
                <p>
                    {alertMessage || null}
                </p>
                <p>
                    {state.nominees.length === 5 ? 
                    "Your movie nominations have been added!" 
                    : 
                    null}
                </p>
            </div>
            <div className="nominees">
                <h2>Nominees</h2>
                {state.nominees?.map((nominee, i) => 
                    <div key={i}>
                        {nominee}
                        <button onClick={(e) => handleRemove(e, nominee)}>x</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default MovieResults