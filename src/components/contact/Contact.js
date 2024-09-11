import React, { useState, useRef } from "react";
import "./contact.css";
import { TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import contactimage from "../../assets/images/contact.svg";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [formdata, setFormdata] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzvx4ek",
        "template_mbwstpp",
        form.current,
        "AI_4H3jSMyncv_rCQ"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            Swal.fire("Thank You for your message");
            setFormdata({
              user_name: "",
              user_email: "",
              message: "",
            });
          } else {
            Swal.fire("Error happend");
          }
        },
        (error) => {
          Swal.fire("Error happend");
        }
      );
  };
  return (
    <div className="contact_main" id="contact">
      <div className="contact_us_form">
        <h2>Feel free to connect</h2>
        <form ref={form}>
          <TextField
            fullwidth="true"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="user_name"
            value={formdata.user_name}
            onChange={handleChange}
          />
          <TextField
            fullwidth="true"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="user_email"
            value={formdata.user_email}
            onChange={handleChange}
          />

          <Textarea
            minRows={4}
            fullwidth="true"
            id="outlined-basic"
            placeholder="Your Message....."
            variant="outlined"
            name="message"
            value={formdata.message}
            onChange={handleChange}
          />
        </form>
        <button onClick={sendEmail}>send </button>
      </div>

      <div className="contact_image_sec">
        <h1>Contact me </h1>
        <img src={contactimage} alt="contact me" />
      </div>
    </div>
  );
};

export default Contact;
