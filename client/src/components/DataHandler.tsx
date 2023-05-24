import Form from './Form';
import * as React from 'react';
import {useState} from 'react';
import MessageDisplay from './MessageDisplay';

export default function DataHandler() {
    //variables

    const [getUsername, setUserName]: [String, any] = useState("")

        function handleSubmit(event: any){
            event.preventDefault()
            setUserName("")
           
            return(
                <div>
                    <MessageDisplay/>
                </div>
            )
        }

    return (
        <div>
            <Form submit = {handleSubmit}/>
             
             

        </div>
    );
}
