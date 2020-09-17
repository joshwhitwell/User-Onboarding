//Import dependencies
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

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
  const [post, setPost] = useState()
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(response => {
  //       setUsers(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

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
    postUser(newUser)
  }

  const validateInput = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(error => {
        setFormErrors({...formErrors, [name]: error.errors[0]})
      })
  }

  const postUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
        setPost(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
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

  // useEffect(() => {
  //   getUsers()
  // }, [])

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
      <div style={{overflow: 'auto'}}>
        <pre>{JSON.stringify(post)}</pre>
      </div>
      {
        users.map(user => 
          <Users key={user.id} user={user}/>
        )
      }
    </div>
  )
}
