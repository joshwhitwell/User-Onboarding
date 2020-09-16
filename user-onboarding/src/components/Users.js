//Import dependencies
import React from 'react'

//Users component
export default function Users(props) {
    const { user } = props
    
    return (
        <div className='container'>
            <h1>{`Name: ${user.name}`}</h1>
            <h2>{`Email: ${user.email}`}</h2>
            <h3>{`Password: ${user.password}`}</h3>
            <h4>{`Terms: ${user.terms}`}</h4>
        </div>
    )
}