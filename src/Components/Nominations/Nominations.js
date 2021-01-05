import React from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider'
import REMOVE_NOMINEE from '../../ContextAPI/reducer'

function Nominations() {
    const [state, dispatch] = useStateValue()

    return (
        <div>
            <h2>Nominees</h2>
            {state.nominees.map((nominee, i) => 
                <div key={i}>
                    {nominee}
                    <button onClick={
                        dispatch({
                            type: REMOVE_NOMINEE,
                            payload: nominee,
                        })
                    }>Remove</button>
                </div>
            )}
        </div>
    )
}

export default Nominations
