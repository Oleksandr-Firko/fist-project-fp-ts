import style from "./profileCard.module.css";
import instIco from "../../assets/instagram.png";
import gitIco from "../../assets/line-md--github-loop.svg";

interface IProfileCardProps {
  portraitUrl: string;
  info: IAboutMe;
  gitLink: string;
  instLink: string;
}

function ProfileCard({
  portraitUrl,
  info,
  gitLink,
  instLink,
}: IProfileCardProps) {
  return (
    <div className={style.person}>
      <PortraitPhoto src={portraitUrl} />
      <AboutMe fullName={info.fullName} hobbies={info.hobbies} />
      <Button accountLink={gitLink} title="My GitHub" icoLink={gitIco} />
      <Button accountLink={instLink} title="My Instagram" icoLink={instIco} />
    </div>
  );
}

interface IAboutMe {
  fullName: string;
  hobbies: string[];
}

function AboutMe({ fullName, hobbies }: IAboutMe) {
  return (
    <div className={style.infoContainer}>
      <h1>I'm {fullName}</h1>
      <div>My hobbies:</div>
      <ul>
        {hobbies.map((hobby: string, index: number) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

interface PortraitPhotoProps {
  src: string;
}

function PortraitPhoto({ src }: PortraitPhotoProps) {
  return (
    <div className={style.photoBox}>
      <img src={src} alt="Portrait" />
    </div>
  );
}

interface IButtonProps {
  accountLink: string;
  title: string;
  icoLink: string;
}

function Button(props: IButtonProps) {
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

export default ProfileCard;
