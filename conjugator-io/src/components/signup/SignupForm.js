import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Checkbox, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import Axios from 'axios';



function SignupForm({ errors, touched, values, status }){
    const [ member, setMember ] = useState([]);
    console.log(member);
    useEffect(() => {
        if(status){
            setMember([...member, status]);
            // alert(`Welcome, ${member.name}`)
        }
    }, [status, member]);




    return(
        <div className="signupFormContainer">
            <Form style={{display: "flex", flexDirection: "column", width: "70%", margin: "0 auto"}}>
                <h2>Sign Up</h2>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Full Name" style={{margin: "4% 0", boxSizing: "border-box", padding: "3% 0"}} />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" style={{margin: "4% 0", boxSizing: "border-box", padding: "3% 0"}} />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" style={{margin: "4% 0", boxSizing: "border-box", padding: "3% 0"}} />
                <label>
                    <Checkbox label="Terms of Service" />
                </label><br />
                <Button type="submit" style={{width: "60%", margin: "0 auto", backgroundColor: "#3B5895"}}>Submit</Button>
            </Form>
            {/* {member.map(member => (
                <p key={member.id}>Welcome, {member.name}</p>
            ))} */}
        </div>
    )
}

const FormikMemberForm = withFormik({
    mapPropsToValues({ name, email, password, terms }){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("First and Last name required"),
        email: Yup.string().email("Email not valid").required(),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required")
    }),
    handleSubmit(values, { setStatus }){
        Axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log("handleSubmit: then: res: ", res.data);
                setStatus(res.data[0]);

            })
           .catch(err => console.log("handleSubmit: catch: err: ", err)); 
        
    }
    }
    
)(SignupForm);

export default FormikMemberForm;