import "./homeWork1.css";
import portrait from "../../../assets/photo.jpg";
import instIco from "../../../assets/instagram.png";
import gitIco from "../../../assets/line-md--github-loop.svg";

function HomeWork1(params) {
  return (
    <div className="container-hw1">
      <PortraitPhoto />
      <AboutMe />
      <Button
        accountLink="https://github.com/Oleksandr-Firko"
        title="My GitHub"
        icoLink={gitIco}
      />
      <Button
        accountLink="https://www.instagram.com/alex_firko/?hl=en"
        title="My Instagram"
        icoLink={instIco}
      />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="info-container">
      <h1>I'm Alex Firko</h1>
      <div>My hobbies:</div>
      <ul>
        <li>Cycling</li>
        <li>Drift</li>
        <li>Making handicrafts</li>
        <li>PC game playing</li>
      </ul>
    </div>
  );
}

function PortraitPhoto() {
  return (
    <div className="photo-box">
      <img src={portrait} alt="Portrait" />
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

export default HomeWork1;
