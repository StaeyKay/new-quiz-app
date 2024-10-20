import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const saveForm = (e) => {
    e.preventDefault();
    if (name) {
      window.localStorage.setItem("nickname", name);  // Save nickname to local storage
      navigate("/introduction");  // Navigate to introduction page
    }
  };

  return (
    <div className="md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1>Welcome to the fun quiz</h1>
      <form onSubmit={saveForm}>
        <label htmlFor="">Kindly enter a nickname to proceed</label>
        <input className="text-red-600"
          type="text"
          placeholder="Enter a nickname"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <button type="submit" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl font-bold">Start</button>
      </form>
      <p>NB: Once you click on start, the first question is displayed and the timer begins. Note that you have 10 secs to answer each question.</p>
    </div>
  );
};

export default Welcome;
