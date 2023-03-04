import React, {useState, useEffect} from 'react'
import { auth, onAuthStateChanged } from './config/firebase'
import { App } from './App'

const _AppContainer = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null)


    // Monitor auth state
    const monitorAuthState = async () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsLoggedIn(user)
            }
            else {
                setIsLoggedIn(null)
            }
        })
    }
    useEffect(()=>{
        monitorAuthState()
    },[])
    return (
        <App isLoggedIn={isLoggedIn}/>
    )
}

export const AppContainer = _AppContainer