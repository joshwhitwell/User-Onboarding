//Import dependencies
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

//Import components
import Form from './Form'
import Users from './Users'
import schema from '../validation/formSchema'

//Form state initial data
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

//Error state initial data
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

  //Mock get request
  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(response => {
  //       setUsers(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  //Form updater called onChange in Form.js
  const updateForm = (name, value) => {
    validateInput(name, value)
    setFormValues({...formValues, [name]: value})
  }

  //Form submitter called onSubmit in Form.js
  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
    }
    postUser(newUser)
  }

  //Input validator called in updateForm in App.js
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

  //Post request helper called in submitForm in App.js
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

  //Form validator imported from formSchema.js
  //Called on change to formValues state
  //On success sets disabled state to false
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
      .catch(() => {
        debugger
      })
  }, [formValues])

  //Mock get users side effect
  // useEffect(() => {
  //   getUsers()
  // }, [])

  //Return App
  return (
    <div className='container'>
      <Form 
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
        disabled={disabled}
        formErrors={formErrors}
      />
      {
        post ?
          <div style={{ overflow: 'auto' }}>
            <h3>Post Response</h3>
            <pre>{JSON.stringify(post)}</pre>
          </div>
          : null
      }
      {
        users.map(user => 
          <Users key={user.id} user={user}/>
        )
      }
    </div>
  )
}
