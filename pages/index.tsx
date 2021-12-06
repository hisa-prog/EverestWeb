import {
  BlockWithCards,
  HomePage,
  HomeText,
  BlockWithTypeOfService,
  Table,
  TableHeader,
  TableData,
  TableDataCenter,
  Button,
  BlockWithButtons,
} from "../components/layouts";
import { ICards } from "../components/interfaces";
import imageCard1 from "../public/imageSource/card1.png";
import imageCard2 from "../public/imageSource/card2.png";
import imageCard3 from "../public/imageSource/card3.png";
import Cards from "../components/platform/cards";
import axios from "axios";
import { useState, useEffect } from "react";

const cards: ICards[] = [
  {
    image: imageCard3.src,
    headerText: "Ночь на склоне Эвереста ",
    content:
      "Проведите виртуальную ночь на склоне Эвереста. Вас встретит сумасшедший вой ветра, очень красивое и чистое ночное небо, а также холод, которого вы никогда не чувствовали. ",
    currentExpedition: 3,
  },
  {
    image: imageCard2.src,
    headerText: "Спуск с эвереста на сноуборде  ",
    content:
      "Совершите опасный спуск с Эвереста на сноуборде, где во многих местах снежного и ледяного покрова склонов есть огромные трещины и настоящие пропасти глубиной в сотни метров. Это принесет вам крутые и новые эмоций.",
    currentExpedition: 2,
  },
  {
    image: imageCard1.src,
    headerText: "Поход на Эверест ",
    content:
      "Совершите виртуальное восхождение на Эверест, на высоту 8848 метров. Эти панорамы на 360 ° охватывают путь к самой высокой точке планеты с севера из Китая. Выберите любую панораму знакового места по маршруту.",
    currentExpedition: 1,
  },
];

export default function Home() {
  const [infoAboutExpedition, setInfoAboutExpedition] = useState([]);
  const [currentPageExpedition, setCurrentPageExpedition] = useState(3);
  const [updatePage, setUpldatePage] = useState(0);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    async function GetInfoExpedition(style: number) {
      let data = await axios.post("/api/GetInformation", {
        currentExpedition: style,
      });
      setInfoAboutExpedition(data.data.data.peoples);
    }
    GetInfoExpedition(currentPageExpedition);
  }, [updatePage, currentPageExpedition]);

  function goToNextExpedition() {
    if (currentPageExpedition > 1) {
      setCurrentPageExpedition((prevCounter: number) => {
        return prevCounter - 1;
      });
    }
  }

  function goToPrevExpedition() {
    if (currentPageExpedition < 3) {
      setCurrentPageExpedition((prevCounter: number) => {
        return prevCounter + 1;
      });
    }
  }

  function updateInfo() {
    setUpldatePage((prevCounter: number) => {
      return prevCounter + 1;
    });
  }

  function goToShowTable() {
    if (showTable === false) {
      setShowTable(() => {
        return true;
      });
    }
  }

  function goToShowHomePage() {
    if (showTable === true) {
      setShowTable(() => {
        return false;
      });
    }
  }

  return (
    <HomePage style={{ position: "relative" }}>
      {!showTable ? (
        <div>
          <div style={{ position: "absolute" }}>
            <HomeText
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                fontSize: "19px",
              }}
            >
              Здравствуй, дорогой посетитель! Мы предоставляем услуги, функция
              которых состоит в том, чтобы доставить вам незабываемые эмоции от
              виртуальных путешествий по Эвересту. Уверяем вас, что вы испытаете
              как минимум 60% того, что испытывают эти храбрые люди, что
              покоряют Эверест в реальности для вас,и это ещё как минимум!
            </HomeText>
            <HomeText style={{ fontSize: "19px" }}>
              Эти услуги делятся на три типа:{" "}
            </HomeText>
            <BlockWithTypeOfService
              style={{ paddingLeft: "1%", paddingRight: "3%" }}
            >
              <HomeText>Ночь на склоне Эвереста</HomeText>
              <HomeText>Спуск на сноуборде с Эвереста</HomeText>
              <HomeText>Восхождение на Эверест</HomeText>
            </BlockWithTypeOfService>
          </div>
          <BlockWithCards>
            {cards.map((item) => (
              <Cards {...item} />
            ))}
          </BlockWithCards>
          <div style={{ paddingLeft: "82%", paddingTop: "220px" }}>
            <Button onClick={() => goToShowTable()}>
              Показать таблицу записи участников
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ paddingLeft: "30%" }}>
          <div>
            <Table>
              <div style={{ paddingLeft: "20px" }}>
                {currentPageExpedition === 3 && (
                  <HomeText>Ночь на склоне Эвереста</HomeText>
                )}
                {currentPageExpedition === 2 && (
                  <HomeText>Спуск на сноуборде с Эвереста</HomeText>
                )}
                {currentPageExpedition === 1 && (
                  <HomeText>Восхождение на Эверест</HomeText>
                )}
              </div>

              <tr>
                <TableHeader>Имя</TableHeader>
                <TableHeader>Фамилия</TableHeader>
                <TableHeader>Номер Телефона</TableHeader>
              </tr>
              {infoAboutExpedition.map((items) => (
                <tr>
                  <TableData>{items.name}</TableData>
                  <TableDataCenter>{items.lastName}</TableDataCenter>
                  <TableDataCenter>{items.number}</TableDataCenter>
                </tr>
              ))}
            </Table>
          </div>
          <BlockWithButtons>
            <Button onClick={() => updateInfo()}>Обновить</Button>
            <Button onClick={() => goToPrevExpedition()}>
              К предыдущему туру
            </Button>
            <Button onClick={() => goToNextExpedition()}>
              К следующему туру
            </Button>
          </BlockWithButtons>
          <div style={{ paddingLeft: "140px" }}>
            <Button onClick={() => goToShowHomePage()}>
              Вернуться на главную страницу
            </Button>
          </div>
        </div>
      )}
    </HomePage>
  );
}
