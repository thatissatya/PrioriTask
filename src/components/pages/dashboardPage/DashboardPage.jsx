import React from 'react'
import './DashboardPage.css'
import { logout } from '../../../config/firebase'
import { SidebarNav } from '../../SidebarNav/SidebarNav'

const _DashboardPage = () => {
    return (
        <div className='ui-dashboard-page'>
            <SidebarNav />
            <div className='ui-dashboard-page-logout-btn'>
            <button onClick={() => logout()}  > Logout </button>
            </div>
        </div>
    )
}

export const DashboardPage = _DashboardPage