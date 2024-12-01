import Carrousel from "../components/Carrousel.jsx";
import SAbout from "../components/SAbout.jsx";
import "./home.css"

const Home = () => {
    const homeStyles ={

    }
  return(
      <div style={homeStyles} className={"home"}>
          <SAbout/>
          <Carrousel/>
      </div>
  )
}
export default Home