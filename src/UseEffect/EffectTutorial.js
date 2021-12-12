import React,{useEffect, useState} from 'react';
import axios from 'axios';


const EffectTutorial =()=>{
    const [data, setData] = useState("");
    const [count, setCount] = useState(0); 
    useEffect (()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email);
            console.log("API was CALLED");
        }); 

    },[count]);
    return(
        <div>
            <h1>Hello world {data}</h1>
            <h2>{count}</h2>
            <button
            onClick={()=>{setCount(count+1)}}>
                Increment
            </button>
        </div>);
}
export default EffectTutorial;