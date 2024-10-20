import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
    const [name, setName] = useState(""); // State to hold the name
    const navigate = useNavigate();
  
    useEffect(() => {
      // Retrieve the nickname from local storage
      const nickname = window.localStorage.getItem("nickname");
      if (nickname) {
        setName(nickname); // Set the name in state
      }
    }, []);
  
    const handleContinue = () => {
      navigate("/quiz"); // Navigate to quiz component
    };

  return (
    <div className="md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1>Welcome to the fun quiz, {name}</h1>
      <p>NB: Once you click on start, the first question is displayed and the timer begins. You have 10 secs to answer each question.</p>
      <button onClick={handleContinue} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl font-bold">Continue</button>
    </div>
  );
};

export default Introduction;
