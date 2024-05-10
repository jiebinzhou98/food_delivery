// SigninPopup.js
import React, { useState } from 'react';
import './SigninPopup.css';

function SigninPopup(props) {
    const [action, setAction] = useState("Sign in");

    const handleToggle = () => {
        setAction(action === "Sign in" ? "Create an Account" : "Sign in");
    };

    return (
        <div className='Popup'>
            <div className='Popup-inner'>
                <form>
                    <h2 className='d-flex justify-content-center'>{action}</h2>
                    <label htmlFor="user-email-phone">Enter Email or Phone Number</label>
                    <br /><input type="text" id="user-email-phone" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br /><input type="password" id="password" />
                    <br />
                    <br />
                    <input type='button' className='signin-btn' onClick={() => props.setTrigger(false)} value={action} />
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                </form>
                <br />
                <div>
                    <div>New to our Store?</div>
                    <span onClick={handleToggle} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                        {action === 'Sign in' ? 'Create an Account' : 'Back to Sign in'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SigninPopup;
