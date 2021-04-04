import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store
