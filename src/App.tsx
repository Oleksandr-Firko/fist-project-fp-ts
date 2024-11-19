import style from "./App.module.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomeWorksHomePage from "./components/homeWorkComponents/homeWorksHomePage/HomeWorksHomePage";
import ClassWorksHomePage from "./components/classWorkComponents/ClassWorksHomePage/ClassWorksHomePage";
import HomeWork1 from "./components/homeWorkComponents/homeWorks/HomeWork1/HomeWork1";
import HomeWork2 from "./components/homeWorkComponents/homeWorks/HomeWork2/HomeWork2";
import HomeWork3 from "./components/homeWorkComponents/homeWorks/HomeWork3/HomeWork3";
import HomeWork4 from "./components/homeWorkComponents/homeWorks/HomeWork4/HomeWork4";
import HomeWork5 from "./components/homeWorkComponents/homeWorks/HomeWork5/HomeWork5";
import HomeWork6 from "./components/homeWorkComponents/homeWorks/homeWork6/HomeWork6";
import HomeWork7 from "./components/homeWorkComponents/homeWorks/homeWork7/HomeWork7";
import HomeWork8 from "./components/homeWorkComponents/homeWorks/homeWork8/HomeWork8";
import HomeWork9 from "./components/homeWorkComponents/homeWorks/homeWork9/HomeWork9";
import HomeWork10 from "./components/homeWorkComponents/homeWorks/homeWork10/HomeWork10";
import HomeWork11 from "./components/homeWorkComponents/homeWorks/homeWork11/HomeWork11";
import HomeWork12 from "./components/homeWorkComponents/homeWorks/HomeWork12/HomeWork12";
import HomeWork13 from "./components/homeWorkComponents/homeWorks/HomeWork13/HomeWork13";
import Lesson01 from "./components/classWorkComponents/lessons/lesson01/Lesson01";
import Lesson02 from "./components/classWorkComponents/lessons/lesson02/Lesson02";
import Lesson03 from "./components/classWorkComponents/lessons/lesson03/Lesson03";
import Lesson04 from "./components/classWorkComponents/lessons/lesson04/Lesson04";
import Lesson05 from "./components/classWorkComponents/lessons/lesson05/Lesson05";
import Lesson06 from "./components/classWorkComponents/lessons/lesson06/Lesson06";
import Lesson07 from "./components/classWorkComponents/lessons/lesson07/Lesson07";
import Lesson08 from "./components/classWorkComponents/lessons/lesson08/Lesson08";
import Lesson09 from "./components/classWorkComponents/lessons/lesson09/Lesson09";
import Lesson10 from "./components/classWorkComponents/lessons/lesson10/Lesson10";
import Lesson10Practice from "./components/classWorkComponents/lessons/lesson10-pr/Lesson10Practice";
import Lesson11 from "./components/classWorkComponents/lessons/lesson11/Lesson11";
import Lesson12 from "./components/classWorkComponents/lessons/lesson12/Lesson12";
import Lesson13 from "./components/classWorkComponents/lessons/lesson13/Lesson13";
import CatFacts from "./components/classWorkComponents/lessons/lesson10-pr/catFacts/CatFacts";
import CatGallery from "./components/classWorkComponents/lessons/lesson10-pr/catGallery/CatGallery";
import ErrorPage from "./components/errorPage/ErrorPage";

function App() {
  return (
    <div className={style.App}>
      <HashRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home-works-home-page" element={<HomeWorksHomePage />}>
              <Route path="home-work1" element={<HomeWork1 />} />
              <Route path="home-work2" element={<HomeWork2 />} />
              <Route path="home-work3" element={<HomeWork3 />} />
              <Route path="home-work4" element={<HomeWork4 />} />
              <Route path="home-work5" element={<HomeWork5 />} />
              <Route path="home-work6" element={<HomeWork6 />} />
              <Route path="home-work7" element={<HomeWork7 />} />
              <Route path="home-work8" element={<HomeWork8 />} />
              <Route path="home-work9" element={<HomeWork9 />} />
              <Route path="home-work10" element={<HomeWork10 />} />
              <Route path="home-work11" element={<HomeWork11 />} />
              <Route path="home-work12" element={<HomeWork12 />} />
              <Route path="home-work13" element={<HomeWork13 />} />
            </Route>
            <Route
              path="class-works-home-page"
              element={<ClassWorksHomePage />}
            >
              <Route path="lesson01" element={<Lesson01 />}></Route>
              <Route path="lesson02" element={<Lesson02 />}></Route>
              <Route path="lesson03" element={<Lesson03 />}></Route>
              <Route path="lesson04" element={<Lesson04 />}></Route>
              <Route path="lesson05" element={<Lesson05 />}></Route>
              <Route path="lesson06" element={<Lesson06 />}></Route>
              <Route path="lesson07" element={<Lesson07 />}></Route>
              <Route path="lesson08" element={<Lesson08 />}></Route>
              <Route path="lesson09" element={<Lesson09 />}></Route>
              <Route path="lesson10" element={<Lesson10 />}></Route>
              <Route path="lesson10-pr" element={<Lesson10Practice />}>
                <Route
                  path="lesson10-pr-first-part"
                  element={<CatFacts />}
                ></Route>
                <Route
                  path="lesson10-pr-second-part"
                  element={<CatGallery />}
                ></Route>
              </Route>
              <Route path="lesson11" element={<Lesson11 />}></Route>
              <Route path="lesson12" element={<Lesson12 />}></Route>
              <Route path="lesson13" element={<Lesson13 />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
