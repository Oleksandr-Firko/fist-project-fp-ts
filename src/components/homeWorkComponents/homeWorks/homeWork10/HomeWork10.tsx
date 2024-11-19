import { useNavigate } from "react-router-dom";
import SuccessfullyCompletedTask from "../../myComponents/successfullyCompletedTask/SuccessfullyCompletedTask";
import TextBox from "../../myComponents/textBox/TextBox";
import style from "./homeWork10.module.css";
import MyButton from "../../myComponents/myButton/MyButton";

export default function HomeWork10() {
  const navigate = useNavigate();
  const homeWorkTask = (
    <>
      <div className="d-f-row a-i-center">
        <h1>HOMEWORK</h1>
        <span className={style.warningMessage}>
          Я выполнил это задание на практике, поэтому использовал переадресацию.
        </span>
        <MyButton name="GO TO THE SOLUTION" func={()=>{navigate('/class-works-home-page/lesson10-pr')}}/>
      </div>
      <h2>Задание</h2>
      <div>
        Разработать компонент Lesson10, который выполняет запросы к API для
        получения случайных фактов о котах и отображает их на веб-странице.
      </div>
      <h3>Основные требования</h3>
      <ol>
        <li>
          Запрос данных при загрузке страницы: При загрузке страницы должен
          автоматически выполняться запрос к API для получения факта о котах.
        </li>
        <li>
          Отображение данных:
          <ul>
            <li>
              Факты должны отображаться в стилизованном блоке на странице.
            </li>
            <li>Пока данные не получены, блок с фактами не отображается.</li>
          </ul>
        </li>
        <li>
          Кнопка "GET MORE INFO":
          <ul>
            <li>
              На странице должна быть кнопка GET MORE INFO, при нажатии на
              которую происходит новый запрос к API.
            </li>
            <li>
              Полученные факты отображаются под предыдущими фактами в том же
              блоке.
            </li>
          </ul>
        </li>
        <li>
          Ограничение блока по высоте:
          <ul>
            <li>
              Когда размер блока с фактами превышает 700px, блок перестает
              расширяться, вместо этого внутри блока появляется скролл.
            </li>
          </ul>
        </li>
        <li>
          Кнопка "DELETE ALL DATA":
          <ul>
            <li>
              На странице должна быть вторая кнопка DELETE ALL DATA, которая
              очищает все загруженные факты.
            </li>
            <li>Если факты отсутствуют, кнопка должна исчезнуть.</li>
          </ul>
        </li>
        <li>
          Индикатор загрузки:
          <ul>
            <li>
              Во время выполнения запроса должен отображаться компонент Loader.
            </li>
            <li>
              Индикатор исчезает, когда данные успешно загружены и отображены на
              странице.
            </li>
          </ul>
        </li>
      </ol>
      <h3>Дополнительные требования</h3>
      <ul>
        <li>
          CSS Modules: Используйте CSS Modules для стилизации компонентов.
        </li>
      </ul>
      <h3>API для получения данных</h3>
      <ul>
        <li>Факт о котах: https://catfact.ninja/fact</li>
        <li>
          Дополнительный API для изображений (опционально):
          https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1
        </li>
      </ul>
      <h2>Дополнительное задание (необязательно)</h2>
      <div>Если основная задача выполнена раньше:</div>
      <ul>
        <li>
          Создать отдельный компонент галереи для отображения карточек с фактами
          о котах.
        </li>
        <li>Создать компонент карточки для отображения отдельного факта.</li>
        <li>
          Использовать grid или flexbox для отображения карточек в галерее.
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <TextBox text={homeWorkTask} background={true} textAlignInbox="left"/>
      <SuccessfullyCompletedTask />
    </div>
  );
}
