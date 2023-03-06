import React, {useState, useEffect} from 'react'
import { auth, onAuthStateChanged } from './config/firebase'
import { App } from './App'

const _AppContainer = () => {

    const [user, setUser] = useState(null)


    // Monitor auth state
    const monitorAuthState = async () => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        })
    }
    useEffect(()=>{
        monitorAuthState()
    },[])
    return (
        <App user={user} />
    )
}

export const AppContainer = _AppContainer