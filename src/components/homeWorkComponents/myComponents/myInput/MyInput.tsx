import style from "./myInput.module.css";
import cn from "classnames";

interface IMyInputProps {
  name: string;
  type: "button" | "password" | "email" | "text" | "number";
  placeholder?: string;
  label: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<any>) => void;
  horizontalLabel?: boolean;
}

function MyInput({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  horizontalLabel,
}: IMyInputProps) {
  return (
    <div
      className={cn(style.formElement, [
        horizontalLabel ? style.horizontalLabel : "",
      ])}
    >
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
