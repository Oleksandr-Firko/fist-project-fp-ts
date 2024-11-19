import { useEffect, useState } from "react";
import style from "./homeWork8.module.css";
import Loader from "../../myComponents/loader/Loader";
import MyButton from "../../myComponents/myButton/MyButton";
interface IImageFetchResponse {
  image: string;
  link: string;
}
export default function HomeWork8() {
  const [imgDoc, setImgDoc] = useState<string>("");
  const [loader, toggleLoader] = useState<boolean>(true);

  const fetchImg = (): void => {
    fetch("https://randomfox.ca/floof")
      .then((res) => res.json())
      .then((data: IImageFetchResponse): void => setImgDoc(data.image));
      toggleLoader(false);
  };

  const getNewFoxImg = () => {
    toggleLoader(true);
    fetchImg();
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <>
      <h1>Home work 8</h1>
      <div className={style.photoBox}>
        {loader ? (
          <div className={style.decorBox}>
            <Loader />
          </div>
        ) : (
          <img src={imgDoc} alt="fox_photo" />
        )}
      </div>
      <h1>Random fox photo</h1>
      <MyButton name="get new fox" func={getNewFoxImg} />
    </>
  );
}
