import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigation = useNavigate()
    function handlelogout(){
        navigation('/login')
    }
    return (
        <div className='out'>
             <header>
                <b>Navigation</b>
                <button onClick={handlelogout}>Logout</button>
            </header>
            <div className="banner">
                <p>Private View</p>
            </div>
            <footer>
                <b>Footer</b>
            </footer>
        </div>
    )
}

export default Logout
