//Import dependencies
import React from 'react'

//Users component
export default function Users(props) {
    const { user } = props
    
    return (
        <div className='container user'>
            <h1>{`Name: ${user.name}`}</h1>
            <h2>{`Email: ${user.email}`}</h2>
            <h3>{`Password: ${user.password}`}</h3>
            {user.terms ? <h4>Terms: Accept</h4> : null}
        </div>
    )
}