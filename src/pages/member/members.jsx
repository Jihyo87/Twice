import "./members.css";
import { TWICE_MEMBERS } from "../../assets/data/membersdata.jsx";

function Members() {
  return (
    <section className="memberswrapper">
      {TWICE_MEMBERS.map(members => ( 
        <section key={members.id} className="cardswrapper">
            <section className="frontcard"> 
              <img src={members.chibiimage} alt="members chibi" />
            </section>
             <section className="hovercard">
                <aside className="hoveremoji">
                    <h2> {members.stagename} </h2>
  `                 <h3> {members.emoji} </h3>
                </aside>
                <img className="hoverimage" src={members.image} alt="members images" />
                <aside className="hoverinfo">
                  <h2>  {members.name}</h2>
                  <h2> {members.age}</h2>
                  <h2> {members.role} </h2>
                  <h2> {members.nationality} </h2>
                </aside>
            </section>  
        </section>
      ))}
    </section>
  );
}

export default Members;
