import React from 'react'

import contacts from './contacts.png'
import './contactText.css'

const ContactText = () => {
    return (
        <>
        <div class="contacts-text">
            <p>Hey! So glad you want to get in touch, please read below before you do, it’ll save us both a headache</p>
            <p>We receive many emails, and try to respond to all of them. We want to be available to readers, and we have really enjoyed hearing their stories and experiences during our many years of travel.</p>
            <p>We ran this site for many years without contact guidelines, but due to the volume of emails I wanted to give a bit more guidance. This will help ensure you receive a useful reply, and will streamline getting back to you more easily.</p>
            <div class="picture-list">
                <img src={contacts} alt="" class="picture-list"/>
                <ul class="list-guidance">
                    <li>We welcome <span>travel questions</span> but before you send them, please take a look at our World Travel Resources page, our Resources for Digital Nomads and Location Independent Entrepreneurs, the post Practical Tips from 4 Years of Travel to sending off your email. You might find your answer there and not need me after all!</li>
                    <li>For <span>food-related questions</span>, see our Resources for Food Travelers page or my book, The Food Traveler’s Handbook, or if street food is your jam, take a look at my popular post, How to Eat Street Food Without Getting Sick.</li>
                    <li>If you are a <span>lawyer doing something interesting</span>, however, you may be a great fit for our new Thrillable Hours series about alternative careers for lawyers – contact away!</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ContactText