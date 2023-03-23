import React, { useState } from 'react';
import {Routes, Route} from "react-router-dom";


import Home from "./components/Home";
var stompClient: any = null;
const SockJS = require('sockjs-client')
const Stomp = require('stompjs')
const App = () => {



    let Sock = new SockJS('http://localhost:8080/ws')
  
    stompClient= Stomp.over(Sock)

    stompClient.debug = null

    stompClient.connect({},function (frame: any){


        console.log(`Connected: ${frame}`)

        
        stompClient.subscribe("/topic/greetings", function (greeting: any) {
            console.log("hi " + greeting);
            alert(greeting.body)
        });

    })

    const sendSomething = () => {

        stompClient.send("/api/ws/hello", {});

    };



    function isError(){
        console.log("error")
    }

    function mariaVniz(payload: any){
        console.log(payload);
    }

  return (
    <div className="App">

            <button onClick={sendSomething}>nazhmi</button>
        <Routes>
            <Route path={"/"}  element={<Home/> } />
        </Routes>
        </div>
 
  );
}

export default App;
