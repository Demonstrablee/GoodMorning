import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export default function MessageDisplay(props) {
    var [dogImageUrl, setDogUrl] = useState("");
    var dog_image_data;
    async function fetchImage() {
        try {
            var response = await fetch("https://dog.ceo/api/breeds/image/random");
            dog_image_data = await response.json();
            // message: url;
            // status: statusVal
            //console.log(dog_image_data)
        }
        catch (error) {
            console.log('error', error);
        }
        ;
        setDogUrl(dog_image_data['message']);
        //console.log(dogImageUrl)  
    }
    // effect on page load
    useEffect(() => {
        fetchImage();
    }, []);
    return (_jsxs("div", Object.assign({ id: 'phoneOutline' }, { children: [_jsx("h1", Object.assign({ id: "userName-phone" }, { children: (props.user)[0] })), _jsx("h6", { children: props.user }), _jsx("img", { id: "summoned-media", src: dogImageUrl, alt: "words", height: '200px', width: '300' }), _jsx("h1", Object.assign({ className: "tagline" }, { children: "Good morning" }))] })));
}
