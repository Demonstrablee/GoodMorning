import '../App.css'
 

export default function Form (props:any): JSX.Element{
     function onFormSubmit(event:any){
        event.preventDefault();
     }
     
    return(
        <div id ="form">
            <form>
                <h1 id= 'title'>Good Morning</h1>
                <label id= 'font-label'>Whats your name? </label>
                <input type= "text" id = "userName"></input>
                <button type = 'submit' onClick={onFormSubmit}></button>
            </form>
            

        </div>
        
    )
}