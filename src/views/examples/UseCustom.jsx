/*import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

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
            <SectionTitle title="Activity #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
*/