import style from "./catCard.module.css";

interface ICartProps {
  imgUrl: string;
  fact: string;
}
export default function CatCard({ imgUrl, fact }: ICartProps): JSX.Element {
  return (
    <div className={style.card}>
      <img src={imgUrl} alt="cat_img" />
      <p>{fact}</p>
    </div>
  );
}
