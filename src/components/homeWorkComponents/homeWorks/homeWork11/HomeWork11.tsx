import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork11() {
  const homeWorkTask = (
    <>
      Подготовьтесь к самостоятельной работе на следующем уроке ⚡️ Повторите
      темы:
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>создания компонентов</li>
        <li>асинхронные запросы</li>
        <li>useState</li>
        <li>useEffect</li>
        <li>props</li>
        <li>TypeScript</li>
        <li>Formik</li>
        <li>Yup</li>
        <li>React-router-dom</li>
        <li>Динамический роутинг</li>
      </ul>
    </>
  );

  return (
    <>
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left" />
      <SuccessfullyCompletedTask />
    </>
  );
}
