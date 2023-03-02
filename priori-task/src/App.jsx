import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { LoginPage } from './components/pages/loginPage/LoginPage'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="ui-app">
            {
                !isLoggedIn && <LoginPage/>
            }
        </div>
    )
}

export default App
