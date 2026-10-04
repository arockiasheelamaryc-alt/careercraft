
import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";

export default function Home(){
  const navigate = useNavigate();

  return(
    <>
    <nav classname="navbar">
    <div className="App">

      <div className="logo">
      <h1>Career Craft</h1>
      <div className="menu">
        <a href="">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/">Careers</a>
        <a href="/">About</a>
        <a href="">Contact</a>
        <button onClick={()=>navigate("/login")}>Login</button>
        </div>
        </div>
      <section className='hero' >
        <div>
          <p className='par'>Your Future StartsHere</p>
          <h1 className="main">Build your career with Career Craft</h1>
          <p className="find">Find the right job, explore career opportunities,<br/>and build a successful future.</p>
          <div className="button">
            <a href="#"><button className="but">Expolore jobs</button></a>
           <a href="#"> <button className="ton">Start your career</button></a>
           <h2>Start  Your Career Journey Today</h2>
           <p className="para"><bold>Discover the right career path, develop the skills you need, prepare for interviews,

            <br/>and explore suitable job opportunities - all in one place with careercraft</bold></p>
          </div>
        </div>
      </section>

      </div>
     </nav>
  </>
   
   );
};
