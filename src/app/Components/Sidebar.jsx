// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-screen w-1/4 fixed top-0 left-0">
      <ul className="p-4 text-3xl mx-12">
        <li>
          <Link href="/" className="block py-2">
            <HomeIcon className='h-12 text-4xl'/> Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="block py-2">
            <PersonIcon className='h-12 text-4xl'/> Profile
          </Link>
        </li>
        {/* <li>
          <Link href="/contact" className="block py-2">
            Contact
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
