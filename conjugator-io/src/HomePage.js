import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import SignupForm from './SignupForm'

// Styled Components
const StyledHeader = styled.h1`
    font-size: 2.4rem;
    box-sizing: border-box;
    padding-top: 5%;
    margin-bottom: 0;
    line-height: 0;
    
`
const HomepageContent = styled.p`
    margin: 0 auto;
    width: 80%;
    font-size: 1.2rem;
    box-sizing: border-box;
    padding: 0 5% 5%;

`
const ContentContainer = styled.div`
    box-sizing: border-box;
    padding: 5% 0;
`
const SignupContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    box-sizing: border-box;
    padding: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    
`
export default function HomePage() {

    return (
        <div>
            <StyledHeader>Bienvenido al Spanish Conjugator!</StyledHeader><br />
            <h2>Verb practice made easy!</h2>
            <h2>Sign up now to track your progress<br />
                and level up your language learning!
            </h2>
            <Container style={{display: "flex", justifyItems: "space-between"}}>
                <ContentContainer>
                    <img src="https://media.giphy.com/media/QsPVRVxhjQjshpu3Uj/giphy.gif" alt="progress graph" style={{height: "45%"}} />
                    <h2>Collect your Stats!</h2>
                    <HomepageContent>Every time you conjugate a verb, we log your response. 
                        Our interactive dashboard allows to look back over the days, weeks, and months. 
                        Figure out where you're excelling and where you need more practice. 
                        Filter your answers bu tense or date range and watch your knowledge grow.
                    </HomepageContent>
                </ContentContainer>
                <ContentContainer>
                    <img src="https://media.giphy.com/media/ZatvyBr6G2kQQjN64D/giphy.gif" alt="settings box" />
                    <h2>Take your skills to the next level!</h2>
                    <HomepageContent>No matter your skill level, Conjugator.io has verbs you can practice with. 
                        Our simple toggle system allows you to challenge yourself or review the basics. 
                        We've got you covered for every tense, Spanish vs. Latin American, and even regular, irregular, or all verbs.
                    </HomepageContent>
                </ContentContainer>
            </Container>
            <SignupContainer>
                <SignupForm />
            </SignupContainer>
        </div>
    )
}