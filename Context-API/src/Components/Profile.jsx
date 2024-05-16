import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function profile() {
    const{user} = useContext(UserContext)
 
    if (!user)return <div>
        please Login
    </div>
    
    return <div>Welcome {user}</div>
}

export default profile