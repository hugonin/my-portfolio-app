import React from 'react';

import './contact.styles.css';

const Contact = () => (
    <div>
         <section className="contact" id="contact" data-nav="Contact">
            <h2 className="section__title section__title--contact">Contact</h2>
            <p className="section__subtitle section__subtitle--contact">Interested in My Work?</p>
            
            <div class="contact-form">
                <form class="contact-form" action="#" method="POST">
                
                <label class="fname-label" for="fname"></label>
                <input class="fname-input" id="fname" type="text" placeholder="Your name" />
                
                <label class="email-label" for="email"></label>
                <input class="email-input" id="email" type="email" placeholder="Your email address" />
                
                <label class="message-label" for="message"></label>
                <textarea class="message-textarea" id="message" placeholder="Leave Me A Message "></textarea>
                
                <button class="btn btn-primary btn-form">send</button>
                </form>             
            </div>   
        </section>
    </div>
)

export default Contact