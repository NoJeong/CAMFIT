import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { imageshow } from '../../_actions';


function UploadClass() {
    const dispatch = useDispatch()
    const [ cover, setCever ] = useState();
    
    const newBook = () => {
        const uploadData = new FormData();
        uploadData.append('cover', cover);
        // console.log(uploadData)
        dispatch(imageshow(uploadData))
        .then((res) => {
            console.log(res.payload)
        })   
    } 

        return (
            <div className="App">
                <h3>Upload images with React</h3>
                <label>
                    Cover
                    <input type="file" onChange={(evt) => setCever(evt.target.files[0])}/>
                </label>
                <br/>
                <button onClick={() => newBook()}>New Book</button>
            </div>
        )
}
export default UploadClass
