import React from "react";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import "./Contact.css";

function Contact() {
  return (
    <footer className="contact-footer">
      <p>Follow me</p>
      <div className="social-icons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ashishphadtare007@gmail.com&su=Hello&body=Hi,%20I%20want%20to%20connect%20with%20you."
          target="_blank"
          rel="gmail"
        >
          <img src={gmail} alt="Gmail" />
        </a>

        <a
          href="https://www.instagram.com/ashishphadtare_007/"
          target="_blank"
          rel="instagram"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://x.com/AshishPhad45317" target="_blank" rel="x">
          <img src={x} alt="x" />
        </a>
        <a
          href="https://www.linkedin.com/in/ashishphadtare914643a/"
          target="_blank"
          rel="linkedin"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/ashishmp007" target="_blank" rel="github">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://wa.me/9146435746?text=Hello%20I%20visited%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
}

export default Contact;
