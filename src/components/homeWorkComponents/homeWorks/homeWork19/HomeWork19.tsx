import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork19() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ol>
       <li>Создание компонентов</li>
       <li>Асинхронные запросы</li>
       <li>useState</li>
       <li>useEffect</li>
       <li>Props</li>
       <li>TypeScript</li>
       <li>Formik</li>
       <li>Yup</li>
       <li>React-router-dom</li>
       <li>Динамический роутинг</li>
      </ol>
    </>
  );

  return (
    <>
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left" />
      <SuccessfullyCompletedTask />
    </>
  );
}
