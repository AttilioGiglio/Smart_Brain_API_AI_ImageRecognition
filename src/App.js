import React from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/* <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
