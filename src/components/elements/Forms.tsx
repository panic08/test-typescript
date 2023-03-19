import React, {useEffect, useState} from 'react';
import Form from "./Form";
import Input from "./Input";

import axios from "axios";




const Forms = () => {
    const [messageText, setMessageText]: any = useState("");
    const [daun, setDaun] = useState("");
    let ando = {
        Message: "lox",
    };

    useEffect(() => {
        const getPosts = () => {
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

                    const andrey = res.data.data.getPosts





                    setMessageText(andrey)


                })
                .catch((error) => {
                    console.error(error)
                })
        };
        getPosts()


    }, [])





    return (
        <div>
            <div style={{alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                {messageText && messageText.map((data: any) => (
                    <Form key={data.id} message={data.message}/>
                    ))}


            </div>
            <Input/>
        </div>

    );
};

export default Forms;
