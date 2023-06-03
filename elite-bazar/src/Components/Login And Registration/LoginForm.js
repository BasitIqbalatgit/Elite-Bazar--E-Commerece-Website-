import React, { useRef,useState } from 'react';
import "../../Assets/css/login.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import videoBackground from '../../Assets/img/background.mp4';

const LoginForm = ({user}) => {

    // const [user,setUser]=useState([
    //     {uId:1,fName:"Basit",lName:"Iqbal",email:'basit.sardar.comsian@gmail.com',password:"123"}
    // ]);
    const Refpassword = useRef();

    const Refemail = useRef();

    const navigate = useNavigate();
    const handleNavigation=()=>{

        if(Refemail.current.value==='basit.sardar.comsian@gmail.com'&&Refpassword.current.value==='123'){
        navigate('/');

    }
    console.log(Refemail);
    console.log(Refpassword);
    }
    
   
    useEffect(()=>{
        Refemail.current.focus();
    },[])

  return (
    <div className='wrapper '>
         <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" id="vid"/>
        
      </video>
        <div className='login-div'>
            <h2 className='mb-3 '>Login</h2>
            <form className='needs-validation'>
            
            
            <div className='form-group was-validated mb-2'>
                <label htmlFor='email' className='form-label'>Email Address</label>
                <input type="email"  className='form-control' required ref={Refemail}/>
                <div className='invalid-feedback'>
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated  mb-2">
                <label htmlFor='password'  className='form-label'>Password</label>
                <input type="password" className='form-control' required ref={Refpassword}/>
                <div className='invalid-feedback' >
                    Please Enter Your Password
                </div>
            </div>
            <div className="form-group form-check mb-2">
                <input type="checkbox" className='form-check-input' />
                <label htmlFor='check' className='form-check-label'>Remember me</label>
            </div>
           
            <button type="submit" className='btn btn-success w-100 mt-2' onClick={handleNavigation}>SIGN IN</button>
            
            <div className="form-group form-check mb-2 pad">
                <label htmlFor='check' className='form-check-label'>Don't have an Account ? 
                    <Link to='/register' ><span>Sign up</span></Link>
                </label>
            </div>
            </form>

        </div>
        
    </div>
  );
};

export default LoginForm;
