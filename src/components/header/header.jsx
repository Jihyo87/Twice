import './header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
   <header className='mainheader'>
            <Link to='/' className="header" >
                <h1 className='headerh1'> TWICE </h1>
            </Link>
        </header>
  );
}

export default Header;
