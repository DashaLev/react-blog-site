import React from 'react'

import './contactForm.css'

const ContactForm = () => {
    return (
        <>
            <div class="contact-info">
                <h2>The best way to reach me is via email using the form below</h2>
                <form action="" class="contact-form">
                    <div>
                        <div class="contact-name">Your Name</div>
                        <input type="text"/>
                    </div>
                    <div>
                        <div class="contact-email">Your Email</div>
                        <input type="email"/>
                    </div>
                    <div>
                        <div class="contact-subject">Subject</div>
                        <input type="text"/>
                    </div>
                    <div>
                        <div class="contact-message">Your Message</div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button>SEND</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm