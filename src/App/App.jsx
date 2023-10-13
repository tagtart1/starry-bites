import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutUs from "../components/About Us Block/AboutUs";
import Home from "../components/Home Block/Home";
import steakSkillet from "../images/steak-skillet.png";
import woodSpoon from "../images/wooden-spoon.png";
import dill from "../images/dill.png";
import rosemary from "../images/rosemary.png";
import "./App.css";
import "./reset.css";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className="App">
      <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div className="intro-greeting">
          <h1>A Parallax And Authentic Steakhouse</h1>
          <button className="book-a-table">Book A Table</button>
        </div>

        <ParallaxLayer offset={0} speed={0.45}>
          <img className="wooden-spoon-img" src={woodSpoon} alt="wood spoon" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <img className="rosemary" src={rosemary} alt="rosemary" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <img className="dill-1" src={dill} alt="dill" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8}>
          <img
            className="steak-skillet"
            src={steakSkillet}
            alt="Gourmet steak on skillet"
          />
        </ParallaxLayer>

        <Header />
      </Parallax>
    </div>
  );
}

export default App;
