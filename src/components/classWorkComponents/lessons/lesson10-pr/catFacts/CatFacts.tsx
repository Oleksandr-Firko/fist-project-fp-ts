import { useEffect, useState } from "react";
import style from "./CatFacts.module.css";
import MyButton from "../../../../homeWorkComponents/myComponents/myButton/MyButton";
import Loader from "../../../../homeWorkComponents/myComponents/loader/Loader";
import cn from "classnames";

interface IFetchCatFactsResponse {
  fact: string;
  length: number;
}

export default function CatFacts() {
  const [fact, setFact] = useState<JSX.Element[]>();
  const [isVisibleFacts, toggleFactsVisibility] = useState<boolean>(false);
  const [loader, toggleLoader] = useState<boolean>(true);

  const fetchCatFacts = async (): Promise<void> => {
    toggleLoader(true);
    const res = await fetch("https://catfact.ninja/fact");
    const data: IFetchCatFactsResponse = await res.json();
    setFact((pre) =>
      pre
        ? [...pre, getLiElement(data.fact, data.length)]
        : [getLiElement(data.fact, data.length)]
    );
    toggleFactsVisibility(true);
    toggleLoader(false);
  };

  function getLiElement(text: string, length: number): JSX.Element {
    return <li key={length + text.charAt(length - 1) + Date()}>{text}</li>; //добавил время чтоби ключ бил уникальний
  }

  const deleteCatsInfo = () => {
    setFact(undefined);
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <>
      <div className="btn-box">
        <MyButton name="GET MORE INFO 🐱‍👤" func={fetchCatFacts} />
        {fact ? (
          <MyButton name="DELETE ALL DATE 🗑" func={deleteCatsInfo} />
        ) : (
          ""
        )}
      </div>
      <div className={cn(style.catInfoBox)}>
        {loader ? (
          <div className={style.decorBox}>
            <Loader />
          </div>
        ) : (
          ""
        )}
        {isVisibleFacts ? (
          <div className={cn(style.infoBox)}>
            <ol>{fact}</ol>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
