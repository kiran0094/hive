"use client"
import React from 'react';
import { Home, Info, Users, Award, Building2, Calendar } from 'lucide-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: Info, label: 'About' },
    { id: 'tracks', icon: Award, label: 'Tracks' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'speakers', icon: Users, label: 'Speakers' },
    { id: 'sponsors', icon: Building2, label: 'Sponsors' },
  ];

  return (
    <nav className="dock-menu">
      {menuItems.map(({ id, icon: Icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dock-item group ${activeItem === id ? 'active' : ''}`}
          onClick={() => setActiveItem(id)}
        >
          <Icon className="w-4 h-4 group-hover:w-6 group-hover:h-6 text-white/80 group-hover:text-white transition-all duration-300" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar