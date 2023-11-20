import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicial"
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoute() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute;
