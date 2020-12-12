import React from 'react';
import {contactData} from '../portfolio'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <div className="contact__title">
                        <p>My Inbox is open for all.</p> 
                    </div>
                    <div className="contact__link">
                        <a href={`mailto: ${contactData.email}`}>{contactData.email}</a>
                    </div>
                    <div className="contact__social">
                        <a href={contactData.linkedin}
                            className="contact__social-icon" target="popup" ><i className='bx bxl-linkedin'></i></a>
                        <a href={contactData.twitter}
                            className="contact__social-icon" target="popup"><i className='bx bxl-twitter'></i></a>
                        <a href={contactData.github}
                            className="contact__social-icon" target="popup"><i className='bx bxl-github'></i></a>
                        <a href={contactData.gitlab}
                            className="contact__social-icon" target="popup"><i className='bx bxl-gitlab'></i></a>
                    </div>
                    
                </div>
            </section>
    )
}

export default Contact;