import './home.css';
import { Link } from 'react-router-dom';
import TwiceHome from '../../assets/images/twice-this-is-for-extraordinary-2k-wallpaper-uhdpaper.com-691@5@g.jpg'
import { TWICE_MEMBERS } from '../../assets/data/membersdata';

function Home() {
    return (
        <section className='homecontainer'>
            <h2 className='homeh2'> This is for!  </h2>
            <img src={TwiceHome} className='homeimage' alt="hero" />
            <section className='homemember'>
                {TWICE_MEMBERS.map (member => ( 
                        <p key={member.id} className='homep'> {member.stagename}</p>
                    ))}
            </section>
        </section>
    );
}

export default Home;