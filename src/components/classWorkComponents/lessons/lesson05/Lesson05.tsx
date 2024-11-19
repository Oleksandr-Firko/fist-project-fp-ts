import HeroGallery from "../../lessonsComponents/heroGallery/HeroGallery";
import { heroes } from "./data";

function Lesson05(): JSX.Element {
  console.log(heroes);
  return (
    <div className="lesson-container">
      <h2>Lesson 05</h2>
      <p>React map() components</p>

    {/* передали в HeroGallery в props data импортированные heroes*/}
      <HeroGallery data={heroes} />

    </div>
  );
}

export default Lesson05;
