import './home.css';
import TwiceHome from '../../assets/images/twice-this-is-for-extraordinary-2k-wallpaper-uhdpaper.com-691@5@g.jpg'
import { TWICE_MEMBERS } from '../../assets/data/membersdata';

function Home() {
    
    return (
        <section className='Homecontainer'>
            <h2 className='Homeh2'> This is for!  </h2>
            <img className='Homeimage' src={TwiceHome} alt='Twice Home Picture'/>
            <section className='homemember'>
            {TWICE_MEMBERS.map (member => ( 
                    <p key={member.id} className='homep'> {member.stagename}</p>
                ))}
            </section>
        </section>

       

        
    );
}

export default Home;