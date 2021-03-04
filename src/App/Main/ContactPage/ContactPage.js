import React from 'react'

import contactbg from './contacts_bg.jpg'
import './contactPage.css'

import ContactText from './ContactText/ContactText'
import ContactForm from './ContactForm/ContactForm'


const ContactPage = () => {
    return (
        <>
            <div className="sticky-picture">
                <img src={contactbg} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="contact-row">
                        <div className="contacts-title">CONTACT</div>
                            <ContactText/>
                            <ContactForm/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage