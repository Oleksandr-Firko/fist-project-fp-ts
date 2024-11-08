import "./heroCard.css";

interface IHeroProps{
  isDark:boolean;
  name:string;
  age:number;
  image:string;
  weapons:string[];
}

function HeroCard({ isDark, name, age, image, weapons }:IHeroProps) {
  return (
    <article className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>
        {name} is {age} years old
      </p>
      <img src={image} alt="" />
      <p>
        Hero weapons
        {weapons.map((weapon:string, index:number) => (
          <span className="weapon" key={index}>
            | {weapon}
          </span>
        ))}
      </p>
    </article>
  );
}

export default HeroCard;
