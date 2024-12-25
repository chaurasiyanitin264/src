import axios from "axios";
import { useState } from "react";
import {  message } from 'antd';

const Contact = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    let api = "http://localhost:3000/login";
    axios
      .post(api, input)
      .then((res) => {
        message.info("Data saved");
        console.log(res);
      })
      .catch((err) => {
        console.error("Error saving data", err);
      });
  };

  // Enable the submit button only when email and password are filled
  const isFormValid = input.email && input.password;

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="form">
        <div className="form-group">
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={input.email}
            onChange={handleInput}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={input.password}
            onChange={handleInput}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`submit-button ${!isFormValid ? "disabled" : ""}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
