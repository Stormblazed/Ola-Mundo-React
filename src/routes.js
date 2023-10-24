import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./componentes/Menu";
import Banner from "./componentes/Banner";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />      
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobremim" element={<SobreMin/>} />
        <Route path="*" element={<div>Pagina não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
