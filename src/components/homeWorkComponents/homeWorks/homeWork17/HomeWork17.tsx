import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork17() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ol>
        <li>Доделайте работу из предыдущего задания!</li>
        <li>
          Убедитесь что у вас есть три компонента: Store.tsx, StoreCard.tsx,
          StorePage.tsx
        </li>
        <ul>
          В проекте есть:
          <li>Вывод товаров в отдельном компонент с props</li>
          <li>Динамическая маршрутизация.</li>
          <li>Форма с валидацией.</li>
          <li>Стилизация</li>
        </ul>
        <li>Дополнительное задание</li>
        <ul>
          <li>
            Реализуйте добавление продуктов в корзину Cart.tsx через контекст.
          </li>
        </ul>
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
