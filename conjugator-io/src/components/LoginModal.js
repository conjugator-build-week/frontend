import React, { Component } from 'react';
import { Container, Modal } from 'semantic-ui-react';
import LoginForm from './LoginForm';

class LoginModal extends Component {
    state = { open: false }
    
    show = (dimmer) => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false})
    
    render(){
        const { open } = this.state;

        return(
            <Container style={{width: '40%'}}>
                {/* Login Button */}
                <div name="login" onClick={this.show}>
                   Login 
                </div>


                <Modal 
                    dimmer={true} 
                    open={open} 
                    onClose={this.close}
                    style={{width: "40%"}}
                >
                    <Modal.Header style={{textAlign: "center"}}>Login</Modal.Header>
                    <Modal.Content>
                        <LoginForm style={{margin: "0 auto"}} />
                    </Modal.Content>
                </Modal>

            </Container>
        )
    }
};

export default LoginModal;