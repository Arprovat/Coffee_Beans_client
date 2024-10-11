import React from 'react';
import teamwork from '../../assets/teamwork.svg';
import singup_bg from '../../assets/signup-background.svg';
import Navber from '../Navber/Navber';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();

        const form =new FormData(e.target)
        const formData = Object.fromEntries(form.entries());
        console.log(formData);
    }
  return (
    <div>
       <div className='max-w-7xl mx-auto'> <Navber ></Navber></div>
    <div className="bg-gradient-to-r from-[#533e3a] from-10% via-[#8B4513] via-30% to-[#3E2723] 
  flex items-center justify-center h-screen">
      <div className="max-w-[940px] md:mt-[90px] pt-18 bg-black-dark glass grid grid-cols-2 max-md:grid-cols-1 items-center gap-20 p-5 rounded-2xl relative">
        
        {/* Image Section */}
        <div className=" max-md:hidden">
          <img src={singup_bg} alt="Signup Background" />
          <img src={teamwork} alt="Teamwork" className="absolute top-36" />
        </div>

        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">Sign Up</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-white">

          <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                type="text"
                placeholder="enter your name"
                name='name' 
                required
                className="w-80 bg-white-light text-black py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                {/* Uncomment and ensure Font Awesome is installed and imported */}
                <i className="fa-solid fa-envelope-open"></i>;
               
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required 
                name='email'
                className="w-80 bg-white-light text-black py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>

            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                type="password"
                placeholder="Password"
                name='password'
                required
                className="w-80 bg-white-light text-black py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>

            <input type="submit" className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2" value="  Sign UP" />
          </form>

          <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
            <p>
              Already have an account? <Link to='/login' className="text-neon-blue font-semibold cursor-pointer">Log in</Link>
            </p>
            <p>
              Forgot password? <a className="text-neon-blue font-semibold cursor-pointer">Reset password</a>
            </p>
            
          </div>
        </div></div>
      </div>
    </div>
  );
};

export default SignUp;
