import React, {useState} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';

function App() {

  const app = new Clarifai.App({
    apiKey: '7201138936c0423db4b982e7484e0e98'
   });

  const [state, setState] = useState({input:''})

  const onInputChange = (e) => {
   console.log(e.target.value) 
  }

  const onButtonChange = (e) => {
console.log('click')
  }

  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 200
        }
      }
    }
  }
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonChange={onButtonChange}/>
      <FaceRecognition />
    </div>
  );
}

export default App;
