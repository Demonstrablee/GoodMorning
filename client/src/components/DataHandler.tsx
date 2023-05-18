import Form from './Form';
import {useState} from 'react';
 

export default function DataHandler() {
    //variables

    const [getUsername, setUserName]: [String, any] = useState("")

        function handleSubmit(){

            setUserName("")
        }

    return (
        <div>
            <Form submit = {handleSubmit}/>

        </div>
    );
}
