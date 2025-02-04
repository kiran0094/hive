"use client"
import { useState }from 'react';
// import { Home, Info, Users, Award, Building2, Calendar } from 'lucide-react';

const Navbar = () => {
  // const [activeItem, setActiveItem] = React.useState('home');
  const [toggleDropdown, setToggleDropdown] = useState(false);


  return (
    <nav className='flex min-w-screen py-4 px-6 justify-between bg-transparent sticky top-0 z-50'>
      
      <div>
        <h2 className='text-2xl font-bold text-white'>HIVE</h2>    

      </div>
{/* desktop */}
      <div className='sm:flex hidden space-x-6'>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Home</button>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>About</button>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Tracks</button>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Schedule</button>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Speakers</button>
         <button className='text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>Sponsors</button>       
    </div>
      {/* mobile */}
      <div className='sm:hidden flex relative'>

      <div className='flex flex-col'>
        <div className='flex justify-center'>
        <button onClick={() => setToggleDropdown(!toggleDropdown)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        </div>

      {toggleDropdown && (
              <div className='dropdown font-bold'>
         <button className='text-white'>Home</button>
         <button className='text-white'>About</button>
         <button className='text-white'>Tracks</button>
         <button className='text-white'>Schedule</button>
         <button className='text-white'>Speakers</button>
         <button className='text-white'>Sponsors</button>

                </div>
              )}
      </div>
      </div>

    </nav>
  );
};

export default Navbar