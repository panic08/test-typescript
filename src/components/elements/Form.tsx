import React from 'react';
import  form from "../../UI/styles/forms.module.scss";
const Form = ({message} : {message: string}) => {
    return (
        <div>
                <div className={form.form}>
                <h2 className={form.text}>{message}</h2>
                    <p>Автор: <span style={{textDecoration: "underline"}}>Андрей Литвицкий</span></p>
                </div>
        </div>
    );
};

export default Form;