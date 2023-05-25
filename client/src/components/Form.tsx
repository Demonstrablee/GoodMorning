import '../App.css'
import React, {useRef} from 'react';
 

export default function Form (props:any): JSX.Element{
    const nameRef =  useRef(null); // refrence for the name 

     function onFormSubmit(event:any){
        event.preventDefault();
      
        const storedUserName = nameRef.current; // set the stored username to this ref (should be updated by onFormChange)

        //console.log(storedUserName)
 
        props.submit(storedUserName)
         

     }
     function onFormChange(event: any){
        //console.log(event.target.id)
        //console.log(event.target.value)
           nameRef.current = event.target.value; // Set the value of the ref to the new value
           //console.log("the ref is currently: "+ nameRef.current) 
     }
     
    return(
        <div >
            <form id ="form" onSubmit={onFormSubmit}>
                <h1 id= 'title'>Good Morning</h1>
                <label id= 'font-label'>Whats your name? </label>
                <input type= "text" id = "userName" onChange ={onFormChange} ref={nameRef} ></input>
                 
            </form>
            

        </div>
        
    )
}