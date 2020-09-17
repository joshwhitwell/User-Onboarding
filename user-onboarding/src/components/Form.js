//Import dependencies
import React from 'react'

//Form Component
export default function Form(props) {
    //Deconstruct props
    const { formValues, updateForm, submitForm, disabled, formErrors } = props

    //Input field event handler
    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value 
        updateForm(name, valueToUse)
    }
    
    //Form submit event handler
    const onSubmit = (event) => {
        event.preventDefault()
        submitForm()
    }

    //Return Form
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
                        id='name-input'
                    />
                </label>

                {formErrors.name ? <p style={{color: 'red'}} id='name-error'>{formErrors.name}</p> : null}

                <label>
                    Email
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        placeholder='email'
                        onChange={onChange}
                        id='email-input'
                    />
                </label>

                {formErrors.email ? <p style={{color: 'red'}} id='email-error'>{formErrors.email}</p> : null}

                <label>
                    Password
                    <input 
                        type='password'
                        name='password'
                        value={formValues.password}
                        placeholder='password'
                        onChange={onChange}
                        id='password-input'
                    />
                </label>

                {formErrors.password ? <p style={{color: 'red'}} id='password-error'>{formErrors.password}</p> : null}

                <label>
                    Terms of Service
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                        id='terms-input'
                    />
                </label>

                {formErrors.terms ? <p style={{color: 'red'}} id='terms-error'>{formErrors.terms}</p> : null}

                <button disabled={disabled} className={disabled ? 'disabled' : 'enabled'} id='submit-button'>Submit</button>

                { formErrors.name || formErrors.email || formErrors.password || formErrors.terms ? <p style={{color: 'red'}} id='submit-error'>Some fields are missing or incomplete</p> : null}

            </form>
        </div>
    )
}