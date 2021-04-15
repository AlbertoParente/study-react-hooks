import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import useCounter from '../../hooks/useCounter'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Your Hook"
                subtitle="Let's learn how to create our own Hook!"
            />

            <SectionTitle title="Activity #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" 
                        onClick={() => inc()}>Inc</button>
                    <button className="btn" 
                        onClick={() => dec()}>Dec</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
