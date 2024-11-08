import "./myInput.css";

function MyInput({ name, type, placeholder, label }) {
  return (
    <div className="form-element">
      <label for={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default MyInput;
