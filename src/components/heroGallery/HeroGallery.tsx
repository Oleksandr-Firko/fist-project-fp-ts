import "./HeroGallery.css";
import GridBox from "../gridBox/GridBox";
import HeroCard from "../heroCard/HeroCard";
import { heroes } from "../homeWorkComponents/HomeWork5/data";

interface IHero {
    id: number;
    name: string;
    age: number;
    isDark: boolean;
    image: string;
    weapons: string[];
}

function HeroGallery() {
  return (
    <GridBox>
      <>
        {heroes.map((hero:IHero) => (
          <HeroCard
            key={hero.id}
            isDark={hero.isDark}
            name={hero.name}
            age={hero.age}
            image={hero.image}
            weapons={hero.weapons}
          />
        ))}
      </>
    </GridBox>
  );
}

export default HeroGallery;
