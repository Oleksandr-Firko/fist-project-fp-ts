import style from "./homeWork1.module.css";
import portrait from "../../assets/photo.jpg";
import instIco from "../../assets/instagram.png";
import gitIco from "../../assets/line-md--github-loop.svg";

function HomeWork1() {
  return (
    <div className={style.container}>
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
    <div className={style.infoContainer}>
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
    <div className={style.photoBox}>
      <img src={portrait} alt="Portrait" />
    </div>
  );
}

interface IButtonProps{
  accountLink:string;
  title:string;
  icoLink:string;
}

function Button(props:IButtonProps) {
  return (
    <div className={style.buttonBox}>
      <button
        onClick={() => (window.location.href = props.accountLink)}
        className={style.icon}
      >
        <span>{props.title}</span>
        <img className={style.icon} src={props.icoLink} alt="ico" />
      </button>
    </div>
  );
}

export default HomeWork1;
