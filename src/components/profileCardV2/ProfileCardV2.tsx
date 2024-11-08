import "./profileCardV2.css";
interface IProfileCardV2Props {
  photoUrl: string;
  name: string;
  professions:string[];
  hobbies: string[];
}

function ProfileCardV2({ photoUrl, name, professions, hobbies }:IProfileCardV2Props) {
  return (
    <div className="person">
      <img src={photoUrl} alt={`${name}'s portrait.`} />
      <h1>{name}</h1>
      <div className="profession-box">
        <h3>Main profession:</h3>
        <ul>
          {professions.map((profession: string, index:number) => (
            <li key={index}>{profession}</li>
          ))}
        </ul>
      </div>
      <div className="hobbies-box"></div>
      <h3>Main hobbies:</h3>
      <ul>
        {hobbies.map((hobby: string, index:number) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCardV2;
