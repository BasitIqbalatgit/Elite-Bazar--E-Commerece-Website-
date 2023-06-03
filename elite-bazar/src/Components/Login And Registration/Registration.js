import React from 'react';
import "../../Assets/css/login.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

import videoBackground from '../../Assets/img/background.mp4';


const Registration = () => {
     

    

  return (
    <div className='wrapper '>
         <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" id="vid"/>
        
      </video>
        <div className='login-div'>
            <h2 className='mb-3 '>Sign Up</h2>
            <form className='needs-validation'>
            <div className='form-group was-validated mb-2'>
                <label htmlFor='text' className='form-label'>User Name</label>
                <input type="text"  className='form-control' required/>
                <div className='invalid-feedback'>
                    Please Enter Your Name
                </div>
            </div>
            {/* <div className='form-group was-validated mb-2'>
                <label htmlFor='text' className='form-label'>Last Name</label>
                <input type="text"  className='form-control' required/>
                <div className='invalid-feedback'>
                    Please Enter Your Last Name
                </div>
            </div> */}
            
            <div className='form-group was-validated mb-2'>
                <label htmlFor='email' className='form-label'>Email Address</label>
                <input type="email"  className='form-control' required/>
                <div className='invalid-feedback'>
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated  mb-2">
                <label htmlFor='password'  className='form-label'>Password</label>
                <input type="password" className='form-control' required />
                <div className='invalid-feedback'>
                    Please Enter Your password
                </div>
            </div>
           
           
            <button type="submit" className='btn btn-success w-100 mt-2'>SIGN UP</button>
            <div className="form-group form-check mb-2 pad">
                <label htmlFor='check' className='form-check-label'>Already have an Account ? 
                    <Link to='/login' ><span>Sign in</span></Link>
                </label>
            </div>
            </form>

        </div>
        
    </div>
  );
};

export default Registration;
