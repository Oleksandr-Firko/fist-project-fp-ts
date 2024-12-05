import { Link } from "react-router-dom";
import style from "./homeWork16.module.css";
import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";

export default function HomeWork16() {
  const homeWorkTask = (
    <>
      <h1>Homework</h1>
      <h3>Задание</h3>
      <ol>
        <li>Компонент Store.tsx:</li>
        <ul>
          <li>
            Загружает данные товаров из API https://dummyjson.com/products.
          </li>
          <li>
            Отображает их в виде карточек, используя отдельный компонент
            StoreCard.tsx.
          </li>
          <li>
            Реализуйте форму с использованием библиотеки Yup для указания
            параметра limit в запросе (https://dummyjson.com/products?limit=2).
            Передавайте кол-во товаров в форме, сделайте проверку.
          </li>
        </ul>
        <li>Компонент StorePage.tsx:</li>
        <ul>
          <li>
            Данные о конкретном товаре должны подгружаться через динамический
            роутинг (https://dummyjson.com/products/1).
          </li>
        </ul>
        <li>Роутинг:</li>
        <ul>
          <li>
            Добавьте ссылку на компонент Store.tsx в header, используя
            react-router-dom.
          </li>
        </ul>
        <li>Стилизация:</li>
        <ul>
          <li>
            Для стилизации компонентов Store.tsx, StoreCard.tsx, StorePage.tsx
            используйте CSS модули. Удачи! ⚡️
          </li>
        </ul>
      </ol>
    </>
  );

  return (
    <>
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left" />
      <Link className={style.btn} to={"../../store"}>
        Go to the solution "lesson 16 practical work
      </Link>
      <SuccessfullyCompletedTask />
    </>
  );
}
