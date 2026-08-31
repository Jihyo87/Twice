import './navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const closeMenu = () => setHamburgerOpen(false);

    return (
        <nav className='navbar'>
            <ul className='navbarlist'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/members'>MEMBER</Link></li>
                <li><Link to='/discography'>DISCOGRAPHY</Link></li>
            </ul>

            <button
                className='hamburgerbutton'
                onClick={() => setHamburgerOpen(!hamburgerOpen)} >
                ☰
            </button>

            <ul className={`hamburgerlist ${hamburgerOpen ? 'open' : ''}`}>
                <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                <li><Link to='/about' onClick={closeMenu}>About</Link></li>
                <li><Link to='/members' onClick={closeMenu}>Member</Link></li>
                <li><Link to='/discography' onClick={closeMenu}>Discography</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;