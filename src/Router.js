import './Router.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Registro from './componentes/Registro';
import Inicio from './componentes/Inicio';
import NotFound from './componentes/NotFound';



function Router() {
  return (

    <HashRouter>

      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/registro' element={<Registro />}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>

    </HashRouter>

  );
}

export default Router;