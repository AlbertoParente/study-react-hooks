import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = (props) => {
    const context = useContext(DataContext)

    function setNumber(n) {
        context.setState({
            ...context.state,
            number: n
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Accepts a context object and returns the current context value!"
            />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>
        </div>
    )
}

export default UseContext
