//Import dependencies
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'

//Import components
import Form from './Form'
import Users from './Users'
import schema from '../validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

//App component
export default function App() {
  //Initialize state
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const updateForm = (name, value) => {
    validateInput(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    }
    setUsers([...users, newUser])
    setFormValues(initialFormValues)
  }

  const validateInput = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(error => {
        setFormErrors({...formErrors, [name]: error.errors[0]})
      })
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
      .catch(() => {
        debugger
      })
  }, [formValues])

  return (
    <div className='container'>
      App
      <Form 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
        disabled={disabled}
        formErrors={formErrors}
      />

      {
        users.map(user => 
          <Users user={user}/>
        )
      }
    </div>
  )
}
