 import { useState, useEffect } from "react";


export default function MessageDisplay(props: any){
  var [dogImageUrl, setDogUrl]: [string, any] = useState("");
  var dog_image_data: any;   
      
      async function fetchImage(){

 

        try{
            var response = await fetch("https://dog.ceo/api/breeds/image/random");


       dog_image_data = await response.json();
            // message: url;
            // status: statusVal
            
            //console.log(dog_image_data)
           

      }catch(error){console.log('error', error)};

       setDogUrl(dog_image_data['message']);
        //console.log(dogImageUrl)  

    }

    // effect on page load
    useEffect(()=>{fetchImage();
        
    },[])
         
    return(
        
        <div id= 'phoneOutline'>
             
            <h1 id= "userName-phone">{(props.user)[0]}</h1>
            <h6>{props.user}</h6>
                <img id="summoned-media" src={dogImageUrl} alt="words" height = '200px' width = '300' />
           
            <h1 className = "tagline">Good morning</h1>  
        </div>
    )
    }