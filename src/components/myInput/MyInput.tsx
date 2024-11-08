import "./myInput.css";

interface IMyInputProps {
  name: string;
  type: "button" | "password" | "email" | "text";
  placeholder: string;
  label: string;
}

function MyInput({ name, type, placeholder, label }: IMyInputProps) {
  return (
    <div className="form-element">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default MyInput;
