import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useAuth } from '../pages/auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than 50px
            setIsScrolled(window.scrollY > 50);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // <>
        //     <div className={`flex justify-between items-center text-black top-0 left-0 transition-colors duration-300 h-[15%] w-[100%] px-[60px] z-50 fixed ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        //         }`} >
        //         {/* <div className="absolute inset-0 bg-black bg-opacity-15"></div> */}

        //         <div className="flex flex-row text-black">
        //             <img src="../../public/icons/logo3.png" alt="" className='h-[90px]' />
        //         </div>

        //         <div className="flex item-center text-black text-2xl">
        //             <ul className={`flex justify-between list-none gap-[20px] uppercase ${isScrolled ? 'text-black ' : 'text-[#ff970d] font-bold'}`}>
        //                 <li>
        //                     <NavLink to="/">Home</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/designandbuild">Projects</NavLink>
        //                 </li>
        //                 {/* <li>
        //                     <NavLink to="/designandbuild">Design & Build</NavLink>
        //                 </li> */}
        //                 <li>
        //                     <NavLink to="#">About Us</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/contact">Contact</NavLink>
        //                 </li>
        //                 {/* <li><NavLink to="/register">Register</NavLink></li>
        //                 <li><NavLink to="/login">Login</NavLink></li> */}
        //                 {/* {isLoggedIn ?
        //                     (<li><NavLink to="/logout">Logout</NavLink></li>)
        //                     : (<>

        //                         <li><NavLink to="/register">Register</NavLink></li>

        //                         <li><NavLink to="/login">Login</NavLink></li>
        //                     </>)
        //                 } */}

        //             </ul>

        //         </div>
        //     </div>
        // </>
        <>
            {/* Top Nav */}
            <div className={`flex justify-between items-center fixed top-0 left-0 w-full px-6 md:px-16 h-[15%] z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                {/* Logo */}
                <div className="flex items-center">
                    <img src="../../public/icons/logo3.png" alt="Logo" className='h-[60px] md:h-[90px]' />
                </div>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    {menuOpen ? (
                        <X className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(false)} />
                    ) : (
                        <Menu className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <ul className={`flex gap-6 text-2xl uppercase ${isScrolled ? 'text-black' : 'text-[#ff970d] font-bold'}`}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/designandbuild">Projects</NavLink></li>
                        <li><NavLink to="#">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu - Hidden until clicked */}
            {menuOpen && (
                <div className="md:hidden fixed top-[15%] left-0 w-full bg-white z-40 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold text-black">
                        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/designandbuild" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                        <li><NavLink to="#" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar