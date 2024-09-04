import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [formSent, setFormSent] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      // Check if form.current is defined
      if (!form.current) return;

      // Sending email using EmailJS
      emailjs
        .sendForm('service_f9s3nm8', 'template_c5vog9f', form.current, 'BmBHL3cgk2M6VTi9e')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
            setFormSent(true); // Indicate success
            setFormError(false);
          },
          (error) => {
            console.log('FAILED...', error);
            setFormError(true); // Indicate failure
            setFormSent(false);
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box component="div" className="contact-form">
            <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
              <div className="form-flex">
                <TextField
                  required
                  id="outlined-required-name"
                  label="Your Name"
                  placeholder="What's your name?"
                  name="name" // Make sure this matches the placeholder {{name}} in EmailJS template
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                />
                <TextField
                  required
                  id="outlined-required-email"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  name="email" // Make sure this matches the placeholder {{email}} in EmailJS template
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? "Please enter your email or phone number" : ""}
                />
              </div>
              <TextField
                required
                id="outlined-multiline-static"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                name="message" // Make sure this matches the placeholder {{message}} in EmailJS template
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
              />
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Send
              </Button>
              {formSent && <p style={{ color: 'green' }}>Your message has been sent successfully!</p>}
              {formError && <p style={{ color: 'red' }}>Failed to send the message. Please try again later.</p>}
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
