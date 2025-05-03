import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch, BsCart4 } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { RiDashboard2Line } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import Logo from '../assets/Logo/Logo-Full-Light.png';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.Profile.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropDown] = useState(false);

  const categories = [
    "Web Development",
    "Python",
    "Web designer",
    "Artificial Intelligence",
    "Java Developer",
    "DevOps",
    "Machine Learning",
    "BlockChain Development"
  ];

  const handleDropDown = () => {
    setOpenDropDown(!openDropdown);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search for:", searchQuery);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full bg-[#000814] text-white top-0 z-40">
      <div className="max-w-7xl mx-auto flex lg:items-center justify-between p-4">

         {/* Mobile Menu Button */}
         <div className='flex gap-10 '>
         <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <RiCloseLine size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>

          {/* Catalog Dropdown */}
          <div className="flex  group">
            <button className="flex items-center hover:text-gray-300">
              Catalog <RiArrowDropDownLine className="text-2xl" />
            </button>
            <div className="absolute mt-8 hidden group-hover:block bg-white text-black rounded-lg shadow-lg z-50">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={`/courses/${cat}`}
                  className="block px-4 py-3 font-bold hover:bg-gray-400 w-full"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/AboutUs" className="hover:text-gray-300">About Us</Link>
          <Link to="/contactUs" className="hover:text-gray-300">Contact Us</Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border border-white rounded px-3 py-1 focus:outline-none w-48"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
              <BsSearch />
            </button>
          </form>
        </nav>

       
        {!user && (
            <div className="flex  gap-2 mt-2">
              <Link to="/login" className="text-white  rounded-sm border-1 border-white px-6 py-2 bg-gray-800 hover:text-gray-400">Login</Link>
              <Link to="/signup" className="text-black rounded-sm  px-6 py-2 bg-yellow-400 hover:text-gray-500">Signup</Link>
            </div>
          )}

        {user && (
        <div className="flex items-center gap-2 me-10 lg:me-4">
          {user.accountType === "Student" && (
            <Link to="/dashboard/cart">
              <BsCart4 className="text-white text-2xl me-3 lg:me-5 cursor-pointer" />
            </Link>
          )}
          <div onClick={handleDropDown} className="flex gap-1 lg:gap-3 items-center cursor-pointer">
            <img src={user.image} alt="Profile" className="h-8 lg:h-10 w-8 lg:w-10 rounded-full bg-white" />
            <FaCaretDown className="text-lg lg:text-xl text-gray-400" />
          </div>
        </div>
      )}
      </div>

    

      {openDropdown && (
        <div className={`flex flex-col absolute rounded-lg ${mobileMenuOpen ? 'right-4 top-24' : 'right-5 lg:right-20 top-16'} bg-gray-900 px-5 py-3 z-50`}>
          <Link
            className="text-white mb-4 text-md flex gap-2 items-center"
            to="/dashboard/my-profile"
            onClick={() => {
              setOpenDropDown(false);
              setMobileMenuOpen(false);
            }}
          >
            <RiDashboard2Line />
            <span>Dashboard</span>
          </Link>
          <button
            className="text-white flex gap-2 items-center text-md"
            onClick={() => {
              handleLogout();
              setMobileMenuOpen(false);
            }}
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000814] px-4 pb-4 space-y-4 z-30">
          <Link to="/" className="block py-2 border-b border-gray-700">Home</Link>

          <div>
            <button
              className="flex w-full justify-between items-center py-2 border-b border-gray-700"
              onClick={() => setCatalogOpen(!catalogOpen)}
            >
              Catalog
              <RiArrowDropDownLine className={`text-2xl transition-transform ${catalogOpen ? 'rotate-180' : ''}`} />
            </button>
            {catalogOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={`/courses/${cat}`}
                    className="block text-gray-300 hover:text-white"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/AboutUs" className="block py-2 border-b border-gray-700">About Us</Link>
          <Link to="/contactUs" className="block py-2 border-b border-gray-700">Contact Us</Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l"
            />
            <button type="submit" className="bg-yellow-500 px-4 rounded-r">
              <BsSearch />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
