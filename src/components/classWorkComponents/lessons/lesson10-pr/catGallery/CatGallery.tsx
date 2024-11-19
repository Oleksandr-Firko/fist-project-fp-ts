import { useEffect, useState } from "react";
import style from "./catGallery.module.css";
import MyButton from "../../../../homeWorkComponents/myComponents/myButton/MyButton";
import Loader from "../../../../homeWorkComponents/myComponents/loader/Loader";
import CatCard from "../catCard/CatCard";
import GridBox from "../../../../homeWorkComponents/myComponents/gridBox/GridBox";

interface IFetchCatFactsResponse {
  fact: string;
  length: number;
}

interface IFetchCatImgResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function CatFacts() {
  const [cards, addCard] = useState<JSX.Element[]>();
  const [loader, loaderToggle] = useState<boolean>(true);

  const getCard = async (): Promise<void> => {
    loaderToggle(true);
    const img = await fetchImage();
    const fact = await fetchFact();
    addCard((pre) =>
      pre ? [...pre, createCard(img, fact)] : [createCard(img, fact)]
    );
    loaderToggle(false);
  };

  function createCard(img: string, fact: string): JSX.Element {
    return <CatCard key={img + fact} imgUrl={img} fact={fact} />;
  }

  const fetchImage = async (): Promise<string> => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const data: IFetchCatImgResponse[] = await res.json();
    return data[0].url;
  };

  const fetchFact = async (): Promise<string> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data: IFetchCatFactsResponse = await res.json();
    return data.fact;
  };

  const deleteCards = (): void => {
    addCard(undefined);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <div className={style.btnBox}>
        {" "}
        <MyButton name="GET MORE INFO 🐱‍👤" func={getCard} />
        {cards ? <MyButton name="DELETE ALL DATE 🗑" func={deleteCards} /> : ""}
      </div>
      <GridBox>
        {cards ? cards : ""}
        {loader ? (
          <div className={style.loader}>
            <Loader />
          </div>
        ) : (
          ""
        )}
      </GridBox>
    </>
  );
}
