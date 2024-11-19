import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork6() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>
          Разместите свой проект TypeScript в новом репозитории и сделайте
          deploy. Добавьте для этого все необходимое в файл package.json
        </li>
        <li>
          Скопируйте все компоненты / уроки / домашнии работы из нашего
          предыдущего проекта в новый. Для переиспользуемых компонентов создайте
          папку components .
        </li>
        <li>
          Пока не меняйте значение c jsx на tsx - мы сделаем это вместе на
          следующем задании и добавим типизацию!
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
