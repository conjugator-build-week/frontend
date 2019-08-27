import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

// Styled Components
const NavHeader = styled.h1`
    font-size: 1.1rem;
    box-sizing: border-box;
    padding-top: 7%;
`

export default function Navbar() {

    // Homepage
    return(
    <div class="navbar">
        <Menu>
            <Container>
                {/* Nav Header */}
                <Menu.Header position="left">
                    <NavHeader>Spanish Conjugator</NavHeader>
                </Menu.Header>
    
                {/* Login Button */}
                <Menu.Item position="right" name="login">
                    Login
                </Menu.Item>

            </Container>
        </Menu>
    </div>
    )
};