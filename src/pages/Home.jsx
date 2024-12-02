import Carrousel from "../components/Carrousel.jsx";
import SAbout from "../components/SAbout.jsx";
import "./home.css"

const Home = () => {
    const homeStyles ={

    }
  return(
      <div style={homeStyles} className={"home"}>
          <SAbout/>
          <div className={"image__h2"}>
              <h2>Images:</h2>
          </div>

          <Carrousel/>
      </div>
  )
}
export default Home