import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork7() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>
        Добавьте расширение TSX в проект оставшимся компонентам. Типизируйте props данные и в useState укажите входящее значение дженериком.
        </li>
      </ul>
    </>
  );

  return (
    <>
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left"/>
      <SuccessfullyCompletedTask />
    </>
  );
}
