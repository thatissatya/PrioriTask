import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
    return (
        <div className="ui-app">
            <div className='ui-app-header'>
                <Header />
            </div>
            <div className='ui-app-body'>
                <div className='ui-app-body-side-navigation-page'></div>
                <div className='ui-app-body-content'></div>
            </div>
        </div>
    )
}

export default App
