import style from "./myButton.module.css";

interface IMyButtonProps {
  name: string;
  type?: "button" | "submit";
  func?: () => void;
  bgColor?: string;
  isDisabled?: boolean;
}

function MyButton({
  name,
  type = "button",
  func,
  bgColor,
  isDisabled = false,
}: IMyButtonProps) {
  return (
    <button
      disabled={isDisabled}
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
