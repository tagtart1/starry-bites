import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutUs from "../components/About Us Block/AboutUs";
import "./App.css";
import "./reset.css";
import Header from "../components/Header/Header";
import "../components/Home Block/Home.css";
import { useRef } from "react";
import UpcomingEvents from "../components/Upcoming/UpcomingEvents";
import useAdaptiveSize from "../useAdaptiveSize";
import { ParallaxConfig } from "../ParallaxConfig";
import { FreshIngredients } from "../components/Fresh Ingredients/FreshIngredients";
import ParallaxImage from "../components/Animated Image/ParallaxImage";
import { Footer } from "../components/Footer/Footer";
import ParallaxBlock from "../components/Misc/ParallaxBlock";
import ParallaxHomeSkillet from "../components/Misc/ParallaxHomeSkillet";
import { MenuBlock } from "../components/Menu Block/MenuBlock";
function App() {
  const parallax = useRef(null);
  const { height, width } = useAdaptiveSize();

  return (
    <div className="App">
      <Parallax
        ref={parallax}
        pages={ParallaxConfig[height].pages}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        innerStyle={{ maxWidth: "1920px" }}
        key={height}
      >
        <div className="intro-greeting">
          <h1>Dive into a cosmic journey of exquisite flavors</h1>
          <button className="book-a-table">Book A Table</button>
        </div>
        <ParallaxHomeSkillet />
        <Header parallax={parallax} />
        {width < 1600 ? <div></div> : <ParallaxBlock height={height} />}

        <AboutUs />
        <MenuBlock parallax={parallax} />
        <UpcomingEvents />
        <FreshIngredients parallax={parallax} />
        <ParallaxImage parallax={parallax} />
        <Footer />
      </Parallax>
    </div>
  );
}

export default App;
