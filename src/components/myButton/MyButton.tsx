import "./myButton.css";

const handleDefaultClick = ():void => {
  console.log("default click!");
};

interface IMyButtonProps {
  name: string;
  type?: 'button' | 'submit';
  func?: (() => void);
  bgColor?: string;
}

function MyButton({ name, type = "button", func = handleDefaultClick, bgColor }:IMyButtonProps) {
  return (
    <button onClick={func} type={type} style={{ backgroundColor: bgColor }}>
      {name}
    </button>
  );
}

export default MyButton;
