import React from "react";
import api from "./api";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return <CardContainer listarecetas={api} />;
}

export default App;
