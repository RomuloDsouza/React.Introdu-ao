
import { Footer } from "./Componetes/Footer"
 

import {Routes, Route} from "react-router-dom"
// import './styles.global.css'; //Importaçao global



function App() {
  return(
      
    <div>
      <header>
        <h1>site</h1>
        
      </header>
      <hr />
    <div>
    <Routes>
        <Route path='/' element={<Footer informacaoTitulo='01'
          informacaoSubTitulo='01'
          informacao='texto '/>}>
        </Route>
        
      </Routes>

    </div>
    <hr />
    <hr />

    <footer>
      <h5>Contado </h5>
    </footer>

    </div>



       
  )

}

  //  /* <Header
      //   nomeCliente='Romulo'
      //   cidadeCliente='Leopoldina'
      //   ufCliente='Mg'
        
      //   />
      // <Pagina2 />
      
      //  <Pagina3 />

      //  <Footer /> */

  

export default App
