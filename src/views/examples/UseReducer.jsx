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
                </div>
            </div>
        </div>
    )
}

export default UseReducer
