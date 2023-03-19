import React from 'react';
import {Routes, Route} from "react-router-dom";

import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
        <div>
        <Routes>
            <Route path={"/"}  element={<Home/> } />
        </Routes>
        </div>
    </div>
  );
}

export default App;
