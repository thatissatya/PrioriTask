import React from 'react'
import './Header.css'
import prioritask from '../../../public/assets/prioritask.svg'
import notification from '../../../public/assets/notification.svg'
const Header = (props) => {
    return (
        <div className='ui-header'>
            <div className='ui-header-logo'>
                <img src={prioritask} alt="N/A" />
            </div>
            <div className='ui-header-right-navigation'>
                <div className='ui-header-right-navigation-search'> <input type='text' id='keyword' placeholder='Keyword' /> </div>
                <div className='ui-header-right-navigation-notification'><img src={notification} alt="N/A" /></div>
                <div className='ui-header-right-navigation-profile'>
                    <div className='ui-header-right-navigation-profile-picture'>
                        <img src={props.user.photoURL} alt='NA' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header