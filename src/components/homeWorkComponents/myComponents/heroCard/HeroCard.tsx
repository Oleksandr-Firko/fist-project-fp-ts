import style from "./heroCard.module.css";

interface IHeroProps{
  isDark:boolean;
  name:string;
  age:number;
  image:string;
  weapons:string[];
}

function HeroCard({ isDark, name, age, image, weapons }:IHeroProps) {
  return (
    <article className={isDark ? style.heroDark : style.heroLight}>
      <h3>{name}</h3>
      <p>
        {name} is {age} years old
      </p>
      <img className={style.img} src={image} alt="" />
      <p>
        Hero weapons
        {weapons.map((weapon:string, index:number) => (
          <span className={style.weapon} key={index}>
            | {weapon}
          </span>
        ))}
      </p>
    </article>
  );
}

export default HeroCard;
