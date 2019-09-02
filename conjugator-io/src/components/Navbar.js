import React, { Component } from 'react';
import { Container, Menu} from 'semantic-ui-react';
import styled from 'styled-components';
import LoginModal from './LoginModal';

// Styled Components
const NavHeader = styled.h1`
    font-size: 1.1rem;
    box-sizing: border-box;
    padding-top: 7%;
`

class Navbar extends Component {

    render(){
        return(
            <div className="navbar">
                <Menu>
                    <Container>
                        <Menu.Header style={{color: '#3B5895'}} position="left">
                            <NavHeader>Spanish Conjugator</NavHeader>
                        </Menu.Header>

                        <Menu.Item position="right" style={{color: '#3B5895'}}>
                            <LoginModal />
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
};

export default Navbar;