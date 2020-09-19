
  

    function App() {

        const app = new Clarifai.App({
          apiKey: '830df3e3c47a4135989c97e73c30b3d9'
        });
      
        const [state, setState] = useState({
          input: '',
          imageUrl: '',
          box: {},
          route: 'signin',
          isSignedIn: false
        })
      
        const { input, imageUrl, box, route, isSignedIn } = state;
      
        const onInputChange = (e) => {
          setState({ input: e.target.value })
        }
      
        const faceLocation = (info) => {
          const clarifaiFace = info.outputs[0].data.regions[0].region_info.bounding_box;
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
      
        console.log(box)
        const faceBox = (container) => {
          setState({ box: container })
        };
      
        const onButtonSubmit = () => {
          setState({ imageUrl: input })
          app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            input)
            .then(response => faceBox(faceLocation(response)))
            .catch(error => console.log(error));
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
      
        const onRouteChange = (route) => {
          if (route === 'signout') {
            setState({ isSignedIn: false })
          } else if (route === 'home') {
            setState({ isSignedIn: true })
          }
          setState({ route: route });
        }
        return (

            <div className="App">
              <div className="App">
                <Particles className='particles'
                  params={particlesOptions}
                />
                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                {route === 'home'
                  ? <div>
                    <Logo />
                    <Rank
                    />
                    <ImageLinkForm
                      onInputChange={onInputChange}
                      onButtonSubmit={onButtonSubmit}
                    />
                    <FaceRecognition /*box={box}*/ imageUrl={imageUrl} />
                  </div>
                  : (
                    route === 'signin'
                      ? <Signin onRouteChange={onRouteChange} />
                      : <Register onRouteChange={onRouteChange} />
                  )
                }
              </div>
            </div>
          );
        }
      