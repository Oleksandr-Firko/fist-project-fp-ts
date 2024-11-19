import style from "./successfullyCompletedTask.module.css";

export default function SuccessfullyCompletedTask() {
  return (
    <div className={style.container}>
      <span className={style.image}>✔</span>Task was successfully completed!{" "}
      <span className={style.image}>✔</span>
    </div>
  );
}
