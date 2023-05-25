import Form from './Form';
import {useState, useEffect} from 'react';
import MessageDisplay from './MessageDisplay';


export default function DataHandler() {
    //variables

    const [userName, setUserName]: [string, any] = useState("")

        function handleSubmit(inputUserName: string){
            //console.log(inputUserName) 
            setUserName(inputUserName)
    
           
        }
        if(userName) // if there is something in username
            console.log("username is : " + userName)  

  
            useEffect(()=>{
                if(userName) // if theres something in username prevents run on page start
                
                console.log("use effect is in action");
            },[userName])
        

    return (
        <div>
            {/* control visibility of components */}
            {!userName ? <Form submit = {handleSubmit}/> : null}
            
             
            {userName ? <MessageDisplay user = {userName}/> : null}  
             
             {/* <MessageDisplay user = {userName}/> */}
        </div>
    );
}
