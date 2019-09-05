import React from 'react';
import { Button } from './Buttons';

function AccentLetters(props){
    const { addAccent } = props;
    
    
    return(
        <div className="accent-buttons">
            <Button>
                <button onClick={addAccent} value="á">
                    á
                </button>
                <button onClick={addAccent} value="é">
                    é
                </button>
                <button onClick={addAccent} value="í">
                    í
                </button>
                <button onClick={addAccent} value="ñ">
                    ñ
                </button>
                <button onClick={addAccent} value="ú">
                    ú
                </button>
            </Button>
        </div>
    );
};

export default AccentLetters;