import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { LoginPage } from './components/pages/loginPage/LoginPage'
import { SidebarNav } from './components/SidebarNav/SidebarNav'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <div className="ui-app">
            {
                !isLoggedIn && <LoginPage/>
            }
            {
                isLoggedIn && <SidebarNav/>
            }
        </div>
    )
}

export default App
