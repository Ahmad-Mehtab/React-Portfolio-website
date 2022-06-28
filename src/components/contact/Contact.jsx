import React from 'react';

import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const [done, setDone] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zb3n2ce', 'template_pmz11fc', form.current, '0jjzqo-8pSYWW2JnK')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <div className="contact-form" id="Contact">
                        <div className="contact-left">
                            <span>Get in touch </span>
                            <span>Contact me</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                    <div className="contact-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="first_name" className="user form-control" placeholder="Name" />
                            <input type="email" name="email" className="user form-control" placeholder="Email" />
                            <textarea name="message" cols="10" rows="10" className="user form-control" placeholder="Message"></textarea>
                            <input type="submit" value="Send" className="button form-control" style={{ marginTop: '1rem' }}
                            />
                            <span style={{ fontSize: '20px', marginTop: '1rem' }}>{done && "Thanks for contacting me"}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact