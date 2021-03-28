import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, sedtValue1] = useState("") 
    const count = useRef(0)

    useEffect(function() {
        count.current = count.current + 1
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Returns a mutable object with the .current property!"
            />
            <SectionTitle title="Activity #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                    value={value1} onChange={e => set} />
            </div>
        </div>
    )
}

export default UseRef
