import React from 'react';

import './contact.styles.css';

const Contact = () => (
    <div>
         <section className="contact" id="contact" data-nav="Contact">
            <h2 className="section__title section__title--contact">Contact</h2>
            <p className="section__subtitle section__subtitle--contact">Interested in My Work?</p>
            
            <div className="contact-form">
                <form className="contact-form" action="#" method="POST">
                
                <label className="fname-label" for="fname"></label>
                <input className="fname-input" id="fname" type="text" placeholder="Your name" />
                
                <label className="email-label" for="email"></label>
                <input className="email-input" id="email" type="email" placeholder="Your email address" />
                
                <label className="message-label" for="message"></label>
                <textarea className="message-textarea" id="message" placeholder="Leave Me A Message "></textarea>
                
                <button className="btn btn-primary btn-form">send</button>
                </form>             
            </div>   
        </section>
    </div>
)

export default Contact