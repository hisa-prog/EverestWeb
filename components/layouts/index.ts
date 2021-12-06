import styled from "styled-components";

export const HomePage = styled.div`
  min-height: 100vh;
  min-width: 80vw;
`;

export const HeaderHome = styled.div`
  height: 60px;
  overflow: hidden;
  background-color: #ffffff10;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
`;

export const TitleHeader = styled.div`
  color: whitesmoke;
  text-align: start;
  margin: 24px;
  font-size: 25px;
  line-height: 19px;
  font-family: "Lato", sans-serif;
  font-weight: 550;
  text-shadow: #b0c0f1 1px 0 4px;
`;

export const BlockWithCards = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const HomeText = styled.h2`
  text-align: center;
  color: whitesmoke;
  font-family: Zapf Chancery, cursive;
  font-stretch: condensed;
  font-weight: 500;
  text-shadow: #b0c0f1 1px 0 4px;
`;

export const BlockWithTypeOfService = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
`;

export const Table = styled.table`
  border: none;
  margin-bottom: 20px;
  border-collapse: separate;
  text-align: center;
  border-spacing: 5px;
  border-radius: 20px;
`;

export const TableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background-color: #ffffff10;
  font-size: 14px;
  border-top: 1px solid #ddd;
  color: white;
`;

export const TableData = styled.td`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #ffffff10;
  vertical-align: top;
  color: white;
  &:hover {
    background-color: black;
    color: white;
    text-shadow: #b0c0f1 1px 0 12px;
  }
`;

export const TableDataCenter = styled(TableData)`
  text-align: center;
`;

export const BlockWithButtons = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 10px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: #ffffff10;
  color: white;
`;
