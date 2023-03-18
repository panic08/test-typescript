import React, {useEffect, useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import API from "../../api/api";




const Forms = () => {
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        API.getPosts()
        setMessageText("lox");


    }, [])

    return (
        <div>
            <div style={{alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                <Form message={messageText}/>
                <Form message={messageText}/>


            </div>
            <Input/>
        </div>
    );
};

export default Forms;