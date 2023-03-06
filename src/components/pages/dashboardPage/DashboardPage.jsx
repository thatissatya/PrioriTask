import React from 'react'
import './DashboardPage.css'
import { logout } from '../../../config/firebase'
import { SidebarNav } from '../../SidebarNav/SidebarNav'
import Header from '../../Header/Header'

const _DashboardPage = (props) => {
    return (
        <div className='ui-dashboard-page'>
            <div className='ui-dashboard-page-header'>
                <Header {...props}/>
            </div>
            <div className='ui-dashboard-page-body'>
                <SidebarNav {...props}/>
                <div className='ui-dashboard-page-body-logout-btn'>
                    <button onClick={() => logout()}  > Logout </button>
                </div>
            </div>
        </div>
    )
}

export const DashboardPage = _DashboardPage