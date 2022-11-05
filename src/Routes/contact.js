import React, { useState} from "react";
import '../contact.css'
import zuri from '../images/zuri.png'
import ing from '../images/ing.png'



export default function Contact() {
    const [txtAreaValue, setTxtAreaValue] = useState("Send me a message and I'll reply you as soon as possible...")
    const [checked, setChecked] = useState(false)

    const handleChange = ()=> {
        setChecked(!checked)
    }
    

    const handleTxtChange = (e)=> {
        setTxtAreaValue(e.target.value)
    }

    const handleSubmit = (e)=> {
         e.preventDefault();
    }

    return (
        <div className="Contact-container">
            <div className="container-content">
                <div className="content-top">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="fn-ln">
                          <div className="fn">
                            <label htmlFor='first_name' className="firstname">First name</label>
                            <input 
                            type='text' 
                            id='first_name' 
                            placeholder="Enter your first name "
                            />
                          </div>

                          <div className="ln">
                            <label htmlFor='last_name' className="lastname">Last name</label>
                            <input
                            type='text' 
                            id='last_name'
                            placeholder="Enter your last name"
                            />
                          </div>
                        </div>
                        

                        <div className="em" >
                            <label htmlFor='email' className="email">Email</label>
                            <input
                             type='email'
                             id='email'
                             placeholder="yourname@email.com"
                             />
                        </div>

                        <div className="txt-area">
                            <label htmlFor="message" className="message">Message</label>
                            <textarea 
                            id='message'
                            onChange={handleTxtChange} 
                            value={txtAreaValue} 
                            className="textarea"
                            />

                        </div>

                        <div className="check">
                          <label class="container" >You agree to providing your data to olab0de who may contact you.
                            <input type="checkbox" onClick={() => handleChange()} checked={checked}/>
                            <span class="checkmark"></span>
                          </label>
                        </div>

                        <div className="submit-btn">
                            <input id= 'btn__submit' type='submit' value='Send message'/>
                        </div>

                    </form>

                </div>

                <footer className="footer">
                    <div className='footer-content-contact'>
                       <img src={zuri} alt='zuri' className='zuri'/>
                       <p>HNG Intership 9 Frontend Task</p>
                       <img src={ing} alt="ingressive for good" className='ingressive'/>
                   </div>
                </footer>

            </div>
        </div>
    )
}

