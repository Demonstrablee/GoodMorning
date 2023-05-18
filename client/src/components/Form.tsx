import '../App.css'
import Phone from '../iphone_transparent2.png' 

export default function Form (props:any): JSX.Element{
    
    return(
        <div id ="form">
            <form>
                <h1 id= 'title'>Good Morning</h1>
                <label id= 'font-label'>Whats your name? </label>
                <input type= "text" id = "userName" ></input>
                
            </form>
            

        </div>
        
    )
}