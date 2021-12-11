import React, { useState } from 'react';

 

const  StateTutorials = () =>{

    const [input, setInput] = useState("Pedro")
    return (
        <div>
            <input 
            placeholder = "enter something" 
            onChange ={(event) => {
                setInput(event.target.value)
            }}/>
            {input}
        </div>
    );
}

export default StateTutorials;