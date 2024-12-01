
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Characters from "./pages/Characters.jsx";

function App() {


  return (
      <>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/characters"} element={<Characters/>}/>
          </Routes>
      </>

  )
}

export default App
