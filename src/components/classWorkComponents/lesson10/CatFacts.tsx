import { useEffect, useState } from "react";
import style from "./CatFacts.module.css";
import MyButton from "../../myButton/MyButton";
import Loader from "./../../loader/Loader";
import cn from "classnames";

interface IFetchCatFactsResponse {
  fact: string;
  length: number;
}

export default function CatFacts() {
  const [fact, setFact] = useState<string>("");
  const [isVisibleFacts, toggleFactsVisibility] = useState<boolean>(false);
  const [loader, toggleLoader] = useState<boolean>(false);

  const fetchCatFacts = async (): Promise<void> => {
    toggleLoader(true);
    const res = await fetch("https://catfact.ninja/fact");
    const data: IFetchCatFactsResponse = await res.json();
    setFact((pre) => pre + data.fact);
    toggleFactsVisibility(true);
    toggleLoader(false);
  };

  const deleteCatsInfo = () => {
    setFact("");
  };
  useEffect(() => {
    fetchCatFacts();
  }, []);
  return (
    <div className={cn(style.catInfoBox)}>
      {loader ? <Loader /> : ""}
      {isVisibleFacts ? <div className={cn(style.infoBox)}>{fact}</div> : ""}
      <div className="btn-box">
        <MyButton name="GET MORE INFO 🐱‍👤" func={fetchCatFacts} />
        {fact ? (
          <MyButton name="DELETE ALL DATE 🗑" func={deleteCatsInfo} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
