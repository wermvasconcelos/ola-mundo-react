import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicial"
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoute() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
        </Route>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoute;
