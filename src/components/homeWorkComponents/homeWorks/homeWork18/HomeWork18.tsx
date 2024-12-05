import { useState } from "react";
import MyButton from "../../myComponents/myButton/MyButton";
import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";
export default function HomeWork18() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ul>
        <li>
          Изменение отображения данных в Header.tsx:
          <ol>
            <li>
              Если пользователь не авторизован: Покажите ссылку на страницу
              авторизации (Login).
            </li>
            <li>
              Если пользователь авторизован: Отобразите имя пользователя и
              ссылки на другие компоненты.
            </li>
          </ol>
        </li>
        <li>
          Изменение главной страницы с уроками:
          <ol>
            <li>
              Если пользователь авторизован: Покажите список доступных уроков.
            </li>
            <li>
              Если пользователь не авторизован: Покажите сообщение: "Для
              просмотра уроков необходимо авторизоваться." с кнопкой перехода на
              страницу авторизации.
            </li>
          </ol>
        </li>

        <li>
          Добавьте валидацию с помощью Yup в форму авторизации:
          <ol>
            Убедитесь, что:
            <li>Поле username не пустое.</li>
            <li>Поле password имеет минимум 6 символов.</li>
          </ol>
        </li>
      </ul>
    </>
  );
  const[isActive, toggleActive] = useState(false);

  const changeActive = () => {
    toggleActive((prev) => !prev);
  };

  return (
    <>
      <MyButton
        func={changeActive}
        name="First version nav-Locker"
        isDisabled={isActive}
      />
      <MyButton
        func={changeActive}
        name="Second version  nav-Locker"
        isDisabled={!isActive}
      />
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left" />
      <SuccessfullyCompletedTask />
    </>
  );
}
