import "./feedBack.css";
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
    <div className="container">
      <h1>Home work 4</h1>
      <div className="feedback-result">
        <span className="like">👍{like || 0}</span>
        <span className="dislike">👎{disLike || 0}</span>
      </div>
      <div className="btn-container">
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