import React from 'react';
import "../../Assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import videoBackground from '../../Assets/img/background.mp4';
import { useStateValue } from '../../context/StateProvider';
import { useRef, useEffect } from 'react';
import { actionType } from '../../context/reducer';


const Registration = () => {
     const RefEmail = useRef();
     const RefPassword= useRef();
     
const RefUserName = useRef();
const [{user},dispatch]= useStateValue();
const nav= useNavigate();

const handleNavigation=(e)=>{
    e.preventDefault();
    const arr = [RefUserName.current.value, RefEmail.current.value, RefPassword.current.value];
    dispatch({type: actionType.SET_USER,
       
        user:arr
    })
    nav('/login');
}

    

useEffect(()=>{
    RefUserName.current.focus();
},[])


  return (
    <div className='wrapper '>
         <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" id="vid"/>
        
      </video>
        <div className='login-div'>
            <h2 className='mb-3 '>Sign Up</h2>
            <form id='regForm' className='needs-validation' onSubmit={handleNavigation}>
            <div className='form-group was-validated mb-2'>
                <label className='form-label'>User Name</label>
                <input name='userName' type="text"  className='form-control' required ref={RefUserName}/>
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
                <label className='form-label'>Email Address</label>
                <input name='email' type="email"  className='form-control' required ref={RefEmail}/>
                <div className='invalid-feedback'>
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated  mb-2">
                <label  className='form-label'>Password</label>
                <input name='password' type="password" className='form-control' required ref={RefPassword}/>
                <div className='invalid-feedback'>
                    Please Enter Your password
                </div>
            </div>
           
           
            <button type="submit" className='btn btn-success w-100 mt-2'>SIGN UP</button>
            <div className="form-group form-check mb-2 pad">
                <label  className='form-check-label'>Already have an Account ? 
                    <Link to='/login' ><span>Sign in</span></Link>
                </label>
            </div>
            </form>

        </div>
        
    </div>
  );
};

export default Registration;
