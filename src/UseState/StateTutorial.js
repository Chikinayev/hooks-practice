import  React, { useState } from 'react';

const StateTutorial = ()=> {
   const [counter, setCounter] = useState(0);

   function increment(){
    setCounter(counter+1);
   };
    return(
        <div>
            {counter} <button onClick={increment}>Increment</button>
        </div>
    );
}
export default StateTutorial;