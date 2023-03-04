import React from 'react'
import './DashboardPage.css'
import { logout } from '../../../config/firebase'
const  _DashboardPage = () => {
  return (
    <div className='ui-dashboard-page'>
        <button onClick={()=> logout() }  > Logout </button>
    </div>
  )
}

export const DashboardPage =  _DashboardPage