import React from "react";
import "./App.css";
import styled from "styled-components";
import ProductContainer from "./containers/ProductContainer";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ProductContainer />
    </AppContainer>
  );
}

export default App;
