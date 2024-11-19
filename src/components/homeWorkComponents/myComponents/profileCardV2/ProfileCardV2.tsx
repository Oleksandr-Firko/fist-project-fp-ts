import style from "./profileCardV2.module.css";
interface IProfileCardV2Props {
  photoUrl: string;
  name: string;
  professions: string[];
  hobbies: string[];
}

function ProfileCardV2({
  photoUrl,
  name,
  professions,
  hobbies,
}: IProfileCardV2Props) {
  return (
    <div className={style.person}>
      <img src={photoUrl} alt={`${name}'s portrait.`} />
      <h1>{name}</h1>
      <div>
        <h3>Main profession:</h3>
        <ul>
          {professions.map((profession: string, index: number) => (
            <li key={index}>{profession}</li>
          ))}
        </ul>
      </div>
      <div></div>
      <h3>Main hobbies:</h3>
      <ul>
        {hobbies.map((hobby: string, index: number) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCardV2;
