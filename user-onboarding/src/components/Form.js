//Import dependencies
import React from 'react'



//Form Component
export default function Form(props) {
    const { formValues, updateForm } = props

    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value 
        updateForm(name, valueToUse)
    }
    
    const onSubmit = () => {
        return
    }

    return (
        <div className='container'>
            <h2>Form</h2>
            <form onSubmit={onSubmit}>

                <label>
                    Name
                    <input 
                        type='text'
                        name='name'
                        value={formValues.name}
                        placeholder='Name'
                        onChange={onChange}
                    />
                </label>

                <label>
                    Email
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        placeholder='email'
                        onChange={onChange}
                    />
                </label>

                <label>
                    Password
                    <input 
                        type='password'
                        name='password'
                        value={formValues.password}
                        placeholder='password'
                        onChange={onChange}
                    />
                </label>

                <label>
                    Terms of Service
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </label>


            </form>
        </div>
    )
}