import React, {useEffect, useState} from 'react';
import Form from "./Form";
import Input from "./Input";

import axios from "axios";
import {CircularProgress} from "@mui/material";




const Forms = () => {
    const [messageText, setMessageText]: any = useState("");
    const [isLoading, setLoading] = useState(false)
    const [daun, setDaun] = useState("");
    let ando = {
        Message: "lox",
    };

    useEffect(() => {
        const getPosts = () => {
            setLoading(true)
            axios.post('http://localhost:8080/graphql/', {
                query: `
  {
    getPosts(option: true) {
      id
      message
    }
  }  
  `
            })
                .then((res) => {
                    setLoading(false)
                    const andrey = res.data.data.getPosts





                    setMessageText(andrey)


                })
                .catch((error) => {
                    setLoading(false)
                    console.error(error)
                })
        };
        getPosts()


    }, [])





    return (
        <div>
            {isLoading ? (
            <CircularProgress style={{alignItems: "center", margin: "0 850px", justifyContent: "center", textAlign: "center"}}/>
                ) : null}
            <div style={{alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                {messageText && messageText.map((data: any) => (
                    <Form  key={data.id} message={data.message}/>
                    ))}


            </div>
            <Input/>
        </div>

    );
};

export default Forms;
