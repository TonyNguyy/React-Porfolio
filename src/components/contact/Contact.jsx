import React, { useRef }from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';
import {toast} from "react-toastify"

const Contact = () => {
  const form = useRef();

  function notifMe (){
    toast.success("Email was sent successfully");
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cy8782d', 'template_bq92lkj', form.current, 'jTzFJrWc-g5dPfH0n')
      .then((result) => {
          console.log(result);
          notifMe();
      }, (error) => {
          console.log(error)
      });

    
  };

  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>tonynguyy@gmail.com</h5>
          <a href="mailto:tonynguyy@gmail.com" target="_blank">Send an Email</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <a href="https://m.me/100004209647711" target="_blank">Send a Message</a>
        </article>


        <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>647-xxx-1310</h5>
          <a href="https://api.whatsapp.com/send?phone=16478761310" target="_blank">Send a Text</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Full Name' required/>
        <input type="email" name="email" placeholder='Email' required/>
        <textarea name="message" placeholder='Write a Message' rows="10" required></textarea>
        <button type="submit" className='btn btn-primary'>Send</button>
      </form>
    </div>
   </section>
  )
}

export default Contact