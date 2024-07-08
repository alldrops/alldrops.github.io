import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import { caughtin4k } from './assets/index';

const App = () => {

  let customConsole = [
    `background-image: url(${caughtin4k})`,
    "background-size: cover",
    "color: black",
    "padding: 100px",
    "font-weight: bolder",
    "font-size: 40px",
    "-webkit-text-stroke-width: 1px",
    "-webkit-text-stroke-color: yellow",
    "text-transform: uppercase",
    "text-align: center",
    "letter-spacing: 1px",
  ].join(" ;");
  
  console.log("%cAREN'T YOU CURIOUS?", customConsole);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
