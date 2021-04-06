import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initiaState = {
    cart: [],
    products: [],
    user: [],
    number: 0
}

function reduce(state, action) {
    switch (action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}
        default: 
            return state
    }
}

const UseReducer = (props) => {
    const [state, exec] = useReducer(reduce, initiaState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Another way to have been in functional components!"
            />
            <div className="center">
                <span className="text">{state}</span>
            </div>
        </div>
    )
}

export default UseReducer
