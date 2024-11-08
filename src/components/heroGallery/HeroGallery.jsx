import "./HeroGallery.css";
import GridBox from "../gridBox/GridBox";
import HeroCard from "../heroCard/HeroCard";
import { heroes } from "../homeWorkComponents/HomeWork5/data";

function HeroGallery() {
  return (
    <GridBox>
      <>
        {heroes.map((hero) => (
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
