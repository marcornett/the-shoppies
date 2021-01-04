import React, {useState} from 'react'
import {useStateValue} from '../../ContextAPI/StateProvider'
import { ADD_NOMINEE } from '../../ContextAPI/reducer'
import './MovieResults.css'

function MovieResults() {
    const [state, dispatch] = useStateValue()
    const [nominees, setNominees] = useState([])
    const [alertMessage, setAlertMessage] = useState([])

    const handleNominate = (e) =>{
        setAlertMessage('')
        if(!nominees.includes(state.movieData?.Title)){
            if(nominees.length < 5){
                setNominees([...nominees, state.movieData?.Title])
                dispatch({
                    type: ADD_NOMINEE,
                    payload: state.movieData?.Title
                })
            } else{
                setAlertMessage('Only 5 movies can be nomincated')
            }
        } else{
            setAlertMessage('Movie already nominated')
        }
    }

    return (
        <div>
            <h2>Results for {state.searchTerm}</h2>
            <ul>
                {state.movieData.Title ? 
                    <li>
                        <span>{state.movieData?.Title}, {state.movieData.Year} </span>
                        <input type="submit" onClick={handleNominate} value="Nominate"/>
                    </li> : 
                null}
            </ul>
            <p>{alertMessage || null}</p>
            <p>
                {nominees.length === 5 ? 
                "Your movie nominations have been added!" 
                : 
                null}
            </p>
            {/* TODO Display nominees in new component*/}
            {console.log(state.nominees)}
        </div>
    )
}
export default MovieResults