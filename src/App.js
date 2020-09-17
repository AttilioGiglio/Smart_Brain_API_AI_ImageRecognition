import React, { useState } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
import Signin from './Components/Signin/Signin';

function App() {

  const app = new Clarifai.App({
    apiKey: '830df3e3c47a4135989c97e73c30b3d9'
  });

  const [state, setState] = useState({
    input: '',
    imageUrl: '',
    box: {}
  })

  const { input, imageUrl, box } = state;

  const onInputChange = (e) => {
    setState({ input: e.target.value })
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


  const displayFaceBox = (container) => {
    setState({ [box]: container })
  };

  const onButtonChange = (e) => {
    setState({ imageUrl: input })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      input)
      .then(response => {
        displayFaceBox(calculateFaceLocation(response))
      })
      .catch(error => {
        console.log(error)
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
      <Signin />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonChange={onButtonChange} />
      <FaceRecognition
        imageUrl={imageUrl}
      // box={box}
      />
    </div>
  );
}

export default App;
