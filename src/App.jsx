import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Achievements,
  PlaneCanvas,
  WeatherCanvas,
  LighthouseCanvas,
} from "./components";
import { useGlobalContext } from "./Context/GlobalContext";

const App = () => {
  const { isMobile } = useGlobalContext();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        {isMobile && (
          <div className="relative w-full h-screen">
            <PlaneCanvas />
          </div>
        )}
        <Tech />
        <Achievements />
        <Works />
        <Contact />
        <WeatherCanvas />
        <div className="relative w-full h-[100vh] overflow-hidden z-[-2]">
          <LighthouseCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
