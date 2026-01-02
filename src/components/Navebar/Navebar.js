import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navebar.css';
import Logo from '../../assets/netflix-6850420_1280.png';
import Search_icon from '../../assets/search.png';
import DropDown from '../../assets/down-chevron.png';
import Bell_icon from '../../assets/alarm.png';
import profile_icon from '../../assets/user.png';




const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const toggleSearch = () => setShowSearch(prev => !prev);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out of Netflix?')) {
      localStorage.removeItem('userToken');
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle('nav-dark', window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={navRef} className='navebar'>
      <div className="navebar-left">
        <img src={Logo} alt="Netflix Logo" className='logo' />
        <ul>
          <li >Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>

      <div className="navebar-right">
        <img src={Search_icon} alt="Search" className='icon' onClick={toggleSearch} />
        {showSearch && (
          <input
            type="text"
            className="search-input"
            placeholder="Search Movies..."
          />
        )}
        <p>Children</p>
        <img src={Bell_icon} alt="Notifications" className='bellicon' />
       <div className='profile1'>
  <img src={profile_icon}alt="Profile"className='profile'onClick={toggleDropdown}/>
  <img src={DropDown}alt="Dropdown"className='dropdownimg' onClick={toggleDropdown}/>

  {showDropdown && (
    <div className='dropdown'>
      <p onClick={handleLogout}>Sign Out Of Netflix</p>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Navbar;