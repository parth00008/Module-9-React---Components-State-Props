import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigation = useNavigate()
    function handlelogin(){
        navigation('/logout')
    }
    return (
        <div className='log'>
            <header>
                <b>Navigation</b>
                <button onClick={handlelogin}>Login</button>
            </header>
            <div className="banner">
                <p>Public View</p>
            </div>
            <footer>
                <b>Footer</b>
            </footer>
        </div>
    )
}

export default Login
