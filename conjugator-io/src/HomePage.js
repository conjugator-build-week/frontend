import React from 'react';
// import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

// Styled Components
const StyledHeader = styled.h1`
    font-size: 2.4rem;
    box-sizing: border-box;
    padding-top: 5%;
    padding-bottom: 0;
    line-height: 0;
    
`
const HomepageContent = styled.p`
    margin: 0 auto;
    width: 50%;
    font-size: 1.2rem;
    box-sizing: border-box;
    padding: 0 5% 5%;

`
export default function HomePage() {

    return (
        <div>
            {/* Page Content Header */}
            <StyledHeader>Bienvenido al Spanish Conjugator!</StyledHeader><br />
            <h2>Verb practice made easy!</h2>

            <div>
                <h2>Sign up now to track your progress<br />
                    and level up your language learning!
                </h2>

                {/* Stat Graph (Gif) */}
                <img src="https://media.giphy.com/media/QsPVRVxhjQjshpu3Uj/giphy.gif" alt="progress graph" />
                <h2>Collect your Stats!</h2>
                <HomepageContent>Every time you conjugate a verb, we log your response. 
                    Our inte
                    
                    ractive dashboard allows to look back over the days, weeks, and months. 
                    Figure out where you're excelling and where you need more practice. 
                    Filter your answers bu tense or date range and watch your knowledge grow.
                </HomepageContent>
                {/* Adjust Settings (Gif) */}
                <img src="https://media.giphy.com/media/ZatvyBr6G2kQQjN64D/giphy.gif" alt="settings box" />
                <h2>Take your skills to the next level!</h2>
                <HomepageContent>No matter your skill level, Conjugator.io has verbs you can practice with. 
                    Our simple toggle system allows you to challenge yourself or review the basics. 
                    We've got you covered for every tense, Spanish vs. Latin American, and even regular, irregular, or all verbs.
                </HomepageContent>
            </div>
        </div>
    )
}