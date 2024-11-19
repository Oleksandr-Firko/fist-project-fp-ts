import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork9() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>Перепишите компоненты из папки components на css modules 🎨</li>
        <li>
          Подготовьтесь к самостоятельной работе на следующем уроке. Повторите
          темы создания компонентов, useState, useEffect, props, TypeScript,
          асинхронные запросы.
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
