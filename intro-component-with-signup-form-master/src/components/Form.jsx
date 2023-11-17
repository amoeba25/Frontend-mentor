import { useState, useEffect } from "react"


const Form = () => {

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password: ''
    });

    const [error, setError] = useState({
        firstName : '',
        lastName: '',
        email:'',
        password: ''
    })

    const [errorStyle, setErrorStyle] = useState({

    })

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormData({
            ...formData,
            [name] : value
        })
        // reseting the error values on change of input
        setError({
            ...error,
            [name]: ''
        })
    }


    const handelSubmit = (e) => {

        e.preventDefault(); 

        //temp object
        const validationError = {}
        
        const {
            firstName,
            lastName,
            email,
            password
        } = formData; 

        //validate the form data
        if(firstName.length< 1) {
            validationError.firstName = 'First name cannot be empty'; 
        }
        if(lastName.length < 1) {
            validationError.lastName = 'Last name cannot be empty'; 
        }

        //email validation
        let emailPattern = /\S+@\S+\.\S+/g;
        if(!emailPattern.test(email)){
            validationError.email = 'Email not in proper format'
        }
        if(email.length < 1) {
            validationError.email = 'Email cannot be empty'; 
        }

        // password validation
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/g; 
        if(!(passwordPattern.test(password))) {
            validationError.password = 'Password should have atleast 1 number, uppercsae, lowercase and special symbols'
        }
        if(password.length <1) {
            validationError.password = 'Password cannot be empty'; 
        }

        setError(prevData => ({
            ...prevData, 
            ...validationError
        }))

        
    }

    const inputStyle = (value) => ({
        border : value? '2px solid red': '1px solid black', 
        borderRadius : '2px', 
    });


    return (
    <div className="form-inner">  
        <div className="trial-banner">
            <p><strong>Try it free 7 days </strong> then $20/mo. thereafter</p>
        </div>
        <div className="form">
            <form onSubmit={handelSubmit}>
                <div>
                    <input type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} name='firstName' style={inputStyle(error.firstName)}/>
                    {error.firstName && <span className="error-msg">{error.firstName}</span>}
                </div>
                <div>
                    <input type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} name='lastName' style={inputStyle(error.lastName)}/> 
                    {error.lastName && <span className="error-msg">{error.lastName}</span>}
                </div>
                <div>
                    <input type="text" placeholder="Email" value={formData.email} onChange={handleChange} name='email' style={inputStyle(error.email)}/> 
                    {error.email && <span className="error-msg">{error.email}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} name='password' style={inputStyle(error.password)}/> 
                    {error.password && <span className="error-msg">{error.password}</span>}
                </div>
                <div>
                    <button type="submit" >Claim your free trial</button>
                <p>By clicking the button, you are agreeing to our <a href = '#'>Terms and Services</a></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Form


