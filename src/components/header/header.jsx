import './header.css'
import TwiceMobileLogo from '../../assets/images/twicemobile3.svg'
import { Link } from 'react-router-dom';


function Header() {
  return (
   <header className='mainheader'>
            <Link to='/' className="header" >
                <h1 className='headerh1'> TWICE </h1>
            </Link>
            <section >
              <Link to="/">
                <img className="homemobilelogo" src={TwiceMobileLogo} alt='Mobile logo'/>
              </Link>
            </section>
        </header>
  );
}

export default Header;
