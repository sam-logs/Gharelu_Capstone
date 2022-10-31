import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from './components/auth'
import userContext from './components/userContext'

function UserProvider({ children }) {

    const [user, setUser] = useState({
        data: {},
        login: false
        
    })

    useEffect(() => {
        setUser({
            data: getCurrentUserDetail(),
            login: isLoggedIn()
        })
    }, [])



    return (

        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>

    )
}

export default UserProvider