import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork11() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>
          Сделайте маршрутизацию (роутинг) для оставшихся компонентов уроков -
          добавьте пути и ссылки на компоненты
        </li>
        <li>Вынесите Header в отдельный компонент.</li>
        <li>
          пожалуйста сделайте самостоятельную работу за 10 урок с API catFacts
          https://catfact.ninja/fact, описание в треде 10 урока. добавьте работу
          по ссылке на 10 урок
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
