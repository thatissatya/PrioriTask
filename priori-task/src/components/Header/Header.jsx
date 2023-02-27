import React from 'react'
import './Header.css'
export const Header = (props) => {
    return (
        <div className='ui-header'>
            <div className='ui-header-logo'>
            </div>
            <div className='ui-header-right-navigation'>
                <div className='ui-header-right-navigation-notification'>
                </div>
                <div className='ui-header-right-navigation-profile'>
                </div>
            </div>
        </div>
    )
}

export default Header