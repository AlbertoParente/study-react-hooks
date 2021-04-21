import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {
    const [value1, sedtValue1] = useState("")
    const [value2, sedtValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])

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
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e => set} />
            </div>
            <SectionTitle title="Activity #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => sedtValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
