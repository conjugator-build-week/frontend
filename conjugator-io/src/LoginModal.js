import React, { Component } from 'react';
import { Container, Modal } from 'semantic-ui-react';
import LoginForm from './LoginForm';

class LoginModal extends Component {
    state = { open: false }
    
    show = (dimmer) => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false})
    
    render(){
        const { open, dimmer } = this.state;

        return(
            <Container style={{width: '20%'}}>
                {/* Login Button */}
                <div name="login" onClick={this.show}>
                    Login
                </div>


                <Modal 
                    dimmer={dimmer} 
                    open={open} 
                    onClose={this.close}
                    style={{width: "40%"}}
                >
                    <Modal.Header style={{textAlign: "center"}}>Login</Modal.Header>
                    <Modal.Content>
                        <LoginForm />
                    </Modal.Content>
                </Modal>

            </Container>
        )
    }
};

export default LoginModal;