import React from 'react'
import { useNavigate }  from "react-router-dom"; 

export default function Web_learn() {
    const navigate = useNavigate();
  return (
    <>
        <iframe
        src="c:\Users\acer\Downloads\CareerCraft_HTML_Detailed_Learning_Guide.pdf"
        title="html.pdf"
        width="100%"
        height="700px"
        style={{border:"none"}}
        ></iframe>
      
    </>
  )
}

