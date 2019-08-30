import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const LoginForm = () => {
    return(
        <Form style={{width: "70%", margin: "0 auto"}}>
            <Form.Field>
                <label>Email:</label>
                <input placeholder="example@gmai.com" required/>
            </Form.Field>
            <Form.Field>
                <label>Password:</label>
                <input type="password" placeholder="p@ssw0rd" required/>
            </Form.Field>
            <Form.Field>
                <Checkbox label="Remember me" />
            </Form.Field>
            <Button style={{backgroundColor: "#3B5895"}} type="submit">Login</Button>
        </Form>
    )
}

export default LoginForm;