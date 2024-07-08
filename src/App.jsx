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
  console.image = (url) =>{
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'blob';
    xhr.onload = function(){
        var fr = new FileReader();

        fr.onload = function(){
            const style = `font-size: 300px; background-image: url("${this.result}"); background-size: contain; background-repeat: no-repeat;`;
            console.log("%c     ", style);
        };
        fr.readAsDataURL(xhr.response); // async call
    };
    xhr.send();
  }

  let customConsoleCaught = [
    'color: #0dd8d8',
    'background: #0b1021',
    'font-size: 2.5rem',
    'padding: 0.25rem',
    'margin: 1rem auto',
    'font-family: Helvetica',
    'border: 2px solid #0dd8d8',
    'border-radius: 4px',
    'font-weight: bold',
    'text-shadow: 1px 1px 1px #00af87bf',
  ].join(" ;");

  let customConsoleCaughtText = [
    'font-size: 18px',
    'background-color: black',
    'color: white',
  ].join(" ;");

  const caughtYou = () => {
    console.image('https://alldrops.github.io/assets/caughtin4k-010e408d.gif');

    setTimeout(() => {
      console.log(`\n%cHA! Caught you in 4k!`, customConsoleCaught);
      console.log('\n%cFeel free to look around, try to break things and have fun!\n\nI made this site using a template, so if you find any bugs or just want to say hi, feel free to message me about it using the contact form own at the bottom of the   page!\n\nI hope your day is as amazing as you!', customConsoleCaughtText);
    }, 1000);
  };

  caughtYou();

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
