import React from 'react';
import {Routes, Route, Link, NavLink, useNavigate} from "react-router-dom";

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
