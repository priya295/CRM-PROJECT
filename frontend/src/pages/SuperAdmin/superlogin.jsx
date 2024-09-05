import React from 'react';
import { Link } from 'react-router-dom';
import flowchangerailogo from '../../images/logo.png'; // Make sure to use the correct path and file name
import loginform  from '../../images/loginform.png';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className='bg-[#511992]'>
      <div className='flex flex-wrap w-[100%] p-5'>
        <div className='w-[40%]'>
          <img src={flowchangerailogo} alt='Flowchange Rail Logo' className='w-[200px]' /> 
          {/* Add an alt attribute for accessibility */}
          <div className='w-[80%] mx-auto'>
          <form className='mt-10 text-white'>
          <h1 className='font-bold text-[40px]'> Sign In </h1>
          <p> Please login to continue to your account.</p>
           <input type='email' placeholder="Email" className='p-3 bg-transparent border border-white rounded-[10px] text-white mt-5 w-[100%]'/>
           <input type='password' placeholder="Password" className='p-3 bg-transparent border border-white rounded-[10px] text-white mt-5 w-[100%]'/>
           <p className='mt-4'> Forget Password ?</p>
           <button className='bg-white text-black p-3 mt-5 w-[100%] rounded-[10px] font-semibold'> Sign In </button>
           <p className='text-center mt-2'> Or</p>
           <button className='bg-transparent text-white border border-white p-3 mt-2 w-[100%] rounded-[10px] font-semibold gap-2 text-center flex justify-center items-center'> Sign in with Google<FcGoogle className='text-[25px]' />  </button>
           <p className='text-center mt-4'> Need An Account ? Create One </p>
          </form>
          </div>
        </div>
        <div className='w-[60%]'>
            <img src={loginform}  className='w-[100%] h-auto'/>
        </div>
      </div>
    </div>
  );
};

export default Login;
