import './profileCard.css'
import instIco from "../../assets/instagram.png";
import gitIco from "../../assets/line-md--github-loop.svg";

function ProfileCard({portraitUrl,info,gitLink,instLink}) {
  return (
    <div className="person">
      <PortraitPhoto src={portraitUrl} />
      <AboutMe fullName={info.fullName} hobbies={info.hobbies}/>
      <Button
        accountLink={gitLink}
        title="My GitHub"
        icoLink={gitIco}
      />
      <Button
        accountLink={instLink}
        title="My Instagram"
        icoLink={instIco}
      />
    </div>
  );
}

function AboutMe({fullName,hobbies}) {
  return (
    <div className="info-container">
      <h1>I'm {fullName}</h1>
      <div>My hobbies:</div>
      <ul>
        {hobbies.map((hobby) => {
          return <li key ={`${hobbies.fullName}-${hobby}`}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

function PortraitPhoto({src}) {
  return (
    <div className="photo-box">
      <img src={src} alt="Portrait" />
    </div>
  );
}

function Button(props) {
  return (
    <div className="button-box">
      <button
        onClick={() => (window.location.href = props.accountLink)}
        className="icon"
        alt="ico"
        target="_blank"
      >
        <span>{props.title}</span>
        <img className="icon" src={props.icoLink} alt="ico" />
      </button>
      <div className="button-bg"></div>
    </div>
  );
}

export default ProfileCard;
