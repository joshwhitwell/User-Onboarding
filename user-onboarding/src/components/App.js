//Import dependencies
import React, { useState, useEffect } from 'react'

//Import components
import Form from './Form.js'

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

  return (
    <div className='container'>
      App
      <Form 
        formValues={formValues}
        updateForm={updateForm}
      />
    </div>
  )
}
