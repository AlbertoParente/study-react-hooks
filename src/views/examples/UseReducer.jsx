import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initiaState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reduce(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reduce, initiaState)

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
                        onClick={() => dispatch({ type: 'login', payload: 'Juliana' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
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
