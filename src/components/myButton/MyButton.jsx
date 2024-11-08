import "./myButton.css";

const handleDefaultClick = () => {
  console.log("default click!");
};

function MyButton({ name, type = "button", func = handleDefaultClick, bgColor }) {
  return (
    <button onClick={func} type={type} style={{ backgroundColor: bgColor }}>
      {name}
    </button>
  );
}

export default MyButton;
