import {FaX } from 'react-icons/fa6';
import './footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/images/Logo_of_TWICE.svg';
import { Link } from 'react-router-dom';



function Footer() {
  return (
   <footer className='mainfooter'>
    <section className='wrapperfooter'>
      <section className='socialmedia'>
          <a href='https://www.facebook.com/JYPETWICE/' target='_blank' rel='noopener noreferrer'><FaFacebook/> </a>
          <a href='https://www.instagram.com/twicetagram/' target='_blank' rel='noopener noreferrer'><FaInstagram/> </a>
          <a href='https://www.tiktok.com/@twice_tiktok_official'target='_blank' rel='noopener noreferrer'><FaTiktok/> </a>
          <a href='https://x.com/JYPETWICE'target='_blank' rel='noopener noreferrer'><FaX/> </a>
          <a href='https://www.youtube.com/c/TWICE/videos'target='_blank' rel='noopener noreferrer'><FaYoutube/> </a>
      </section>
      <section className='twicelogo'>
        <Link to='/'>
                <img src={logo} alt='twice logo'/>
        </Link> 
      </section>
      <section className='homeabout'>
          <Link to='/'> HOME </Link>
          <Link to='/about'> ABOUT </Link>
          <Link to='/discography'> DISCOGRAPHY </Link>
          <Link to='/members'> MEMBERS </Link>
      </section>
      <section className='copyright'>
        <p> ©Vincent Gasatan, 2026</p>
      </section>
    </section>
   </footer>
  );
}

export default Footer;
