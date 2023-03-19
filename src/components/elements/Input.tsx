import React, {useState} from 'react';
import  form from "../../UI/styles/forms.module.scss";
import API from "../../api/api";
import Button from '@mui/material/Button'

import {Alert, AlertTitle, TextField} from "@mui/material";



const Input = () => {
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        API.sendPost(message)
        setMessage("")
        setSuccessful(true)
    }
    const handleChange = (e: any) => {
        setMessage(e.target.value);
    }

    return (
        <div>
            <div>
                <TextField  id="outlined-basic" label="Введите сообщение" variant="outlined" onChange={handleChange} value={message}  style={{alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0px 650px"}}/>


                <Button variant="contained"  onClick={handleSubmit}  style={{margin: "8px -620px"}}>Отправить</Button>{' '}

            </div>
            {successful ? (
            <Alert onClose={() => setSuccessful(false)} style={{width: "520px", margin: "15px 650px"}} severity="success">
                <AlertTitle>Успешно</AlertTitle>
                <strong>Вы успешно отправили сообщение</strong>
            </Alert>
                ) : null }
        </div>
    );
};

export default Input;