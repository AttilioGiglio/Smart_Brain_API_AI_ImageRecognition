import React, { useState } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';

function App() {

  const app = new Clarifai.App({
    apiKey: '830df3e3c47a4135989c97e73c30b3d9'
  });

  const [state, setState] = useState({ 
    input: '',
    imageUrl: '' 
  })

  const {input, imageUrl} = state;

  const onInputChange = (e) => {
    setState({input:e.target.value})
  }

  const onButtonChange = (e) => {
    setState({imageUrl:input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      input)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        // There was an error
      });
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
      <ImageLinkForm 
      onInputChange={onInputChange} 
      onButtonChange={onButtonChange} />
      <FaceRecognition 
      imageUrl={imageUrl}
      />
    </div>
  );
}

export default App;
