import React from 'react'
import './SigninPopup.css'
import 'bootstrap/dist/css/bootstrap.css'

function SigninPopup(props){
    return ( props.trigger)?(
        <div className='Popup'>
            <div className='Popup-inner'>
                <form >
                    <h2 className='d-flex justify-content-center'>Sign in</h2>
                    <label for="User's email and phone number">Enter Email or Phone Number</label>
                    <br /><input type="text" /> 
                    <br />
                    <label for="password"> Password </label>
                    <br /><input type="text" />
                    <br />
                    <br />
                
                    <input type='button' className='signin-btn' onClick={()=>{props.setTrigger(false)}} value={'Sign in'}/> 
                    {/* <input type="button" className='close-btn' onClick={()=>{props.setTrigger(false)}} value={"Close"}/>  */}
                    <button className='close-btn' onClick={()=>{props.setTrigger(false)}}>Close</button>
                </form>
                
                
                {/* {props.children} */}
            
                <br />
                <div>
                    <div>New to our Store?</div>
                    <a href="">Create an Account</a>
                </div>
            </div>
        </div>
    ):"";
        
    
}

export default SigninPopup