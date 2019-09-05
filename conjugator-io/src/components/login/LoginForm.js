import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
// import { Button } from '../buttons/Buttons';

const LoginForm = () => {
    return(
        <Form>
            <Form.Field style={{margin: "0 auto"}}>
                <label>Email:</label>
                <input placeholder="example@gmai.com" required/>
            </Form.Field>
            <Form.Field style={{margin: "0 auto"}}>
                <label>Password:</label>
                <input type="password" placeholder="p@ssw0rd" required/>
            </Form.Field>
            <Form.Field style={{margin: "0 auto"}}>
                <Checkbox label="Remember me" />
            </Form.Field>
            <div style={{margin: "0 auto"}}>
            <Button type="submit">Login</Button>
            </div>
        </Form>
    )
}

export default LoginForm;