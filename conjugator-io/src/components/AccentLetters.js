import React from 'react';
import { Button } from './Buttons';

function AccentLetters(){

    return(
        <div className="accent-buttons">
            <Button>
                <button type="button" value="á">
                    á
                </button>
                <button value="é">
                    é
                </button>
                <button value="í">
                    í
                </button>
                <button value="ñ">
                    ñ
                </button>
                <button value="ú">
                    ú
                </button>
            </Button>
        </div>
    );
};

export default AccentLetters;