import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Jobs from "./Jobs";
import Jobserch from "./Jobserch";
import Web_learn from "./Web_learn";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/login" element={<Login/>}/>  

            <Route path="/jobs" element={<Jobs/>} /> 

            <Route path="/jobserch" element={<Jobserch/>}/>

            <Route path="/web_learn" element={<Web_learn/>} />

            <Route path="/Web_learn/html pdf" element={<Web_learn/>} />
            
            </Routes>

    );
}
export default App;