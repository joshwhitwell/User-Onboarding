//Import dependencies
import React from 'react'

//Form Component
export default function Form(props) {
    const { formValues, updateForm, submitForm, disabled, formErrors } = props

    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value 
        updateForm(name, valueToUse)
    }
    
    const onSubmit = (event) => {
        event.preventDefault()
        submitForm()
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

                {formErrors.name ? <p style={{color: 'red'}}>{formErrors.name}</p> : null}

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

                {formErrors.email ? <p style={{color: 'red'}}>{formErrors.email}</p> : null}

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

                {formErrors.password ? <p style={{color: 'red'}}>{formErrors.password}</p> : null}

                <label>
                    Terms of Service
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </label>

                {formErrors.terms ? <p style={{color: 'red'}}>{formErrors.terms}</p> : null}

                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}