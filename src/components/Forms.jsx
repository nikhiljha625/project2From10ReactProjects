import React from 'react'
import { useState } from 'react';
import Btn from './Buttons';
function Forms() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log('Form data submitted:', formData);
  };



  return (


    <>
    <Btn key={"CALL"} name={"CALL"} />
    <Btn key={"MAIL"} name={"MAIL"} />
    <Btn key={"TEXT"} name={"TEXT ME"} />

    <form onSubmit={handleSubmit} action="">
        <label>
        name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>

      <br />

      <label >
        Text:
        <input type="text" 
        name="text" 
        value={formData.text} 
        onChange={handleInputChange}/>
      </label>

      <br />

      <Btn key={"SUBMIT"} name={"SUBMIT"}/>


    </form>

    </>
  )
}

export default Forms 