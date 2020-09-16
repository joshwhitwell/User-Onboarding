//Import dependencies
import React, { useState, useEffect } from 'react'

//Import components
import Form from './Form'
import Users from './Users'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

//App component
export default function App() {
  //Initialize state
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms,
    }
    setUsers([...users, newUser])
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      App
      <Form 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />

      {
        users.map(user => 
          <Users user={user}/>
        )
      }
    </div>
  )
}
