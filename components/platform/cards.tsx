import { useEffect, useState } from "react";
import { ICards } from "../interfaces";
import axios from "axios";

const Cards = ({ image, headerText, content, currentExpedition }: ICards) => {
  const [nameField, setNameField] = useState("")
  const [surNameField, setSurNameField] = useState("")
  const [numberField, setNumberField] = useState("")

  function changeExpedition (style: number) {
    sendValues(style,nameField,surNameField,numberField)
  }

  function sendValues (currExpedition: number, currName: string, currSurName: string, currNumber: string) {
    async function AddExpedition(currExpedition: number, currName: string, currSurName: string, currNumber: string ) {
      await axios.put("/api/AddExpedition", { currentExpedition: currExpedition, name: currName, lastName: currSurName, number: currNumber });
    }
    AddExpedition(currentExpedition, nameField, surNameField, numberField);
  }
  
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={image} />
        </div>
        <div className="content">
          <h2>{headerText}</h2>
          <p>{content}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <p style={{marginLeft: "35px"}}>Имя</p>
            <input
              value={nameField}
              onChange={(tmp) => setNameField(tmp.target.value)}
              style={{ height: "20px", marginTop: "20px", borderRadius: "4px" }}
            ></input>
            <p>Фамилия</p>
            <input
              value={surNameField}
              onChange={(tmp) => setSurNameField(tmp.target.value)}
              style={{ height: "20px", marginTop: "20px", borderRadius: "4px" }}
            ></input>
            <p style={{marginLeft: "20px"}}>Номер</p>
            <input 
            value={numberField}
            onChange={tmp => setNumberField(tmp.target.value)}
            style={{ height: "20px", marginTop: "20px", borderRadius: "4px" }}></input>
          </div>
          <button onClick={() => changeExpedition(currentExpedition)}
          style={{borderRadius: "4px", background: "#ffffff10", color: "white"}}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
