import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { LoginPage } from './components/pages/loginPage/LoginPage'
import { DashboardPage } from './components/pages/dashboardPage/DashboardPage'

import { SidebarNav } from './components/SidebarNav/SidebarNav'

const _App = (props)=> {
    return (
        <div className="ui-app">
            {
                props.isLoggedIn ? <DashboardPage /> : <LoginPage />
            }
        </div>
    )
}

export const App = _App
