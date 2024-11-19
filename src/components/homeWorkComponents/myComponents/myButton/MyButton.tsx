import style from "./myButton.module.css";

interface IMyButtonProps {
  name: string;
  type?: "button" | "submit";
  func?: () => void;
  bgColor?: string;
}

const handleDefaultClick = () => {
  console.log("default click!");
};

function MyButton({ name, type = "button", func= handleDefaultClick, bgColor }: IMyButtonProps) {
  return (
    <button
      className={style.button}
      onClick={func}
      type={type}
      style={{ backgroundColor: bgColor }}
    >
      {name}
    </button>
  );
}

export default MyButton;
