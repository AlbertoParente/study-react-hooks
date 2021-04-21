/*import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initiaState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initiaState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Another way to have been in functional components!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">No User!</span>
                }
                <span className="text">{state}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'Juliana')}>Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}>*7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberInt' })}>Int</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: -9 })}>-9</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: +11 })}>+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
*/