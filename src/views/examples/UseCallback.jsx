import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Returns a memoized function!"
            />
            <di className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </di>
        </div>
    )

    const [count2, setCount2] = useState(0)

    const inc = useCallback(function (delta) {
        setCount2(current => current + delta)
    }, [setCount2])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Returns a memoized function!"
            />
            <di className="center">
                <span className="text">{count2}</span>
                <UseCallbackButtons inc={inc} />
            </di>
        </div>
    )
}

export default UseCallback
