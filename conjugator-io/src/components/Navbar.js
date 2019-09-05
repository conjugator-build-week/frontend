import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu} from 'semantic-ui-react';
import styled from 'styled-components';
import LoginModal from './login/LoginModal';

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
                <Menu style={{background: "#0000FF"}}>
                    <Container>
                        <Menu.Header  position="left">
                            <NavLink to="/"><NavHeader style={{color: 'white'}}>Spanish Conjugator</NavHeader></NavLink>
                        </Menu.Header>

                        <Menu.Item position="right" style={{color: 'white'}}>
                            <LoginModal /> 
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
};

export default Navbar;