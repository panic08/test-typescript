import React from 'react';
import  form from "../../UI/styles/forms.module.css";
const Input = () => {
    return (
        <div>
            <div>
                <input className={form.input} style={{alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0px 655px"}}/>


                <a className={form.button} style={{margin: "0 -620px"}}>Отправить</a>
            </div>
        </div>
    );
};

export default Input;