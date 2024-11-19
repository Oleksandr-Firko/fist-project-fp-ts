import styles from "./homeWork2.module.css";
import ProfileCardV2 from "../../myComponents/profileCardV2/ProfileCardV2";

interface IPeople{
    id: number;
    photo_url: string;
    name: string;
    professions: string[];
    hobbies: string[];
}

let famousPeople:IPeople[] = [
  {
    id: 0,
    photo_url:
      "https://img01.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/7/dc/7dcbd696ea6e3e762ddee72126ceece9.jpg",
    name: "Elon Musk",
    professions: ["Entrepreneur","founder of SpaceX and Tesla","owner of X (formerly Twitter)"],
    hobbies: ["Space innovation","artificial intelligence","electric vehicles"],
  },
  {
    id: 1,
    photo_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg",
    name: "Barack Obama",
    professions: ["44th President of the United States","author","public figure"],
    hobbies: ["Basketball", "music", "writing books"],
  },
  {
    id: 2,
    photo_url:
      "https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg",
    name: "Taylor Swift",
    professions: ["Singer", "songwriter", "actress"],
    hobbies: ["Writing music", "creative work", "acting"],
  },
];

function HomeWork2() {
  return (
    <div className={styles.box}>
      <h1 >Home Work 2</h1>
      <h1 >The most famous people in the world!</h1>
      <div className={styles.container}>
        {famousPeople.map((person:IPeople) => {
          return (
            <ProfileCardV2
              key={person.id}
              photoUrl={person.photo_url}
              name={person.name}
              professions={person.professions}
              hobbies={person.hobbies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeWork2;
