import { useEffect, useState } from "react";
import "./homeWork8.css";
interface IImageFetchResponse {
  image: string;
  link: string;
}
export default function HomeWork8() {
  const [imgDoc, setImgDoc] = useState<string>("");

  const fetchImg = (): void => {
    fetch("https://randomfox.ca/floof")
      .then((res) => res.json())
      .then((data: IImageFetchResponse): void => setImgDoc(data.image));
  };
  useEffect(() => {
    fetchImg();
  }, []);
  return (
    <>
      <h1>Home work 8</h1>
      <div className="photo-box">
        <img src={imgDoc} alt="fox_photo" />
      </div>
      <h1>Random fox photo</h1>
    </>
  );
}
