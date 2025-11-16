import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const nav = true
    return (
        <div className='bg-white py-4 border-b border-gray-200'>
            <nav className="flex items-center justify-between px-6 md:px-0  md:max-w-11/12 md:mx-auto relative transition-all">

                <Link to="/">
                    <svg width="40" height="40" viewBox="0 0 59 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.1533L56.0254 27.3643C57.7788 27.8295 59 29.4164 59 31.2305V40H49V35.8457L29.501 30.6729L10 35.8457V40H0V31.2305C4.53996e-06 29.4164 1.22118 27.8295 2.97461 27.3643L10.001 25.499L2.97461 23.6357C1.22116 23.1706 3.02567e-05 21.5836 0 19.7695V14C0 11.7909 1.79086 10 4 10H10V15.1533Z" fill="#0BDC85"></path>
                        <path d="M55 10C57.2091 10 59 11.7909 59 14V20H49V10H55Z" fill="#0BDC85"></path>
                        <path d="M45 0C47.2091 0 49 1.79086 49 4V10H10V4C10 1.79086 11.7909 2.81866e-08 14 0H45Z" fill="#0BDC85"></path>
                    </svg>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    <NavLink to="/" className="block">Home</NavLink>
                    <NavLink to="/" className="block">Issues</NavLink>
                    <NavLink to="/" className="block">All Issues</NavLink>
                    <NavLink to="/" className="block">Add Issues</NavLink>
                    <NavLink to="/" className="block">My Issues</NavLink>
                    <NavLink to="/" className="block">My Contribution</NavLink>


                    {
                        nav ? (
                            <>

                                <div className=' '>
                                    <img className=' rounded-full w-10 h-10 object-cover' src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                                </div>

                            </>

                        ) : (
                            <>
                                <button className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full">
                                    Register
                                </button>
                                <button className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full">
                                    Login
                                </button>

                            </>

                        )
                    }
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to="/" className="block">Home</NavLink>
                    <NavLink to="/" className="block">Issues</NavLink>
                    <NavLink to="/" className="block">All Issues</NavLink>
                    <NavLink to="/" className="block">Add Issues</NavLink>
                    <NavLink to="/" className="block">My Issues</NavLink>
                    <NavLink to="/" className="block">My Contribution</NavLink>
                    <button className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-sm">
                        Register
                    </button>
                    <button className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-sm">
                        Login
                    </button>
                </div>

            </nav >
        </div >
    );
};

export default Navbar;