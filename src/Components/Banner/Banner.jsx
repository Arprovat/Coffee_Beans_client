import React from 'react';
import banner2 from '../../assets/banner2.jpg'
import bg_1 from '../../assets/bg_1.png'
import Navber from '../Navber/Navber';
import CountUp from 'react-countup';

const Banner = () => {
    return (
      <div className=''>
         <Navber/>
      <div className="hero relative max-md:pt-28 pt-18  bg-base-200 min-h-screen ">
  
  <div className="hero-content  flex-col lg:flex-row-reverse">
  <div className='md:w-2/5 relative flex-1 flex justify-center items-center xl:min-h-screen
  max-md:py-4'>
  <img
      src={banner2}
      className="object-contain relative rounded-lg shadow-2xl " />
  </div>
    <div className='md:w-2/5 bg-transparent ' >
    <div className='absolute z-0'>
      <img src={bg_1} alt="" className='object-contain opacity-15' />
    </div>
     <div className='z-10 relative'>
     <h1 className="text-5xl  font-bold"> Welcome to <span className='text-[#331A15]'>Coffee world</span></h1>
      <p className="py-6">
      Where every cup tells a story. Enjoy freshly brewed coffee, cozy vibes, and a space to relax or connect."
      </p>
      <button className="btn bg-[#5c2a20] hover:bg-[#a65c2a] hover:text-[#331A15] text-[#f8f6f6] font-semibold text-lg">Get Started</button>
      <div className="flex justify-start  items-start flex-wrap w-full mt-20 gap-16 ">
            <div >
            <p className="text-4xl text-[#a65c2a] font-palanquin font-bold"><CountUp  end={100} />+</p>
             <p className="leading-7 font-semibold text-[#331A15]">Coffees</p>
            </div>
            <div >
            <p className="text-4xl font-palanquin font-bold text-[#a65c2a]"><CountUp  end={10} />K+</p>
             <p className="leading-7 text-[#331A15] font-semibold text-slate-gray">Customers</p>
            </div>
            <div >
            <p className="text-4xl text-[#a65c2a] font-palanquin font-bold"><CountUp  end={10} />+</p>
             <p className="leading-7 font-semibold text-slate-gray text-[#331A15]">Chefs</p>
            </div>
   
     </div>
</div>
    </div>
  </div>
</div>
</div>
    );
};

export default Banner;