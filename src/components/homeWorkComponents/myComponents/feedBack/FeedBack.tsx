import style from"./feedBack.module.css";
import MyButton from "../myButton/MyButton";
import { useState } from "react";

function FeedBack() {
  const [ like, setLike ] = useState<number>(0);
  const [ disLike, setDislike ] = useState<number>(0);

  const handleLike = ():void => {
    setLike(prev => ++prev);
  };
  const handleDislike = ():void => {
    setDislike((prev) => ++prev);
  };
  const resetAllData = ():void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className={style.container}>
      <h1>Home work 4</h1>
      <div className={style.feedbackResult}>
        <span className={style.like}>👍{like || 0}</span>
        <span className={style.dislike}>👎{disLike || 0}</span>
      </div>
      <div className={style.btnContainer}>
        <div>
          <MyButton func={handleLike} name={"Like"} bgColor={"greenyellow"} />
          <MyButton func={handleDislike} name={"Dislike"} bgColor={"red"} />
        </div>
        <MyButton func={resetAllData} name={"Reset Result"} />
      </div>
    </div>
  );
}

export default FeedBack;
