import "./profileCardV2.css";

function ProfileCardV2({ photoUrl, name, professions, hobbies }) {
  return (
    <div className="person">
      <img src={photoUrl} alt={`${name}'s portrait.`} />
      <h1>{name}</h1>
      <div className="profession-box">
        <h3>Main profession:</h3>
        <ul>
          {professions.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div className="hobbies-box"></div>
      <h3>Main hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCardV2;
