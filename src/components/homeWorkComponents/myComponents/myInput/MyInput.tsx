import style from "./myInput.module.css";

interface IMyInputProps {
  name: string;
  type: "button" | "password" | "email" | "text";
  placeholder: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

function MyInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
}: IMyInputProps) {
  return (
    <div className={style.formElement}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default MyInput;
