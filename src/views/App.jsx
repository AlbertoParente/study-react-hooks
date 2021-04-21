import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
//import DataContext, { data } from './data/DataContext'
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState()

    return (
        <Store>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
        </Store>
    )
}

export default App
