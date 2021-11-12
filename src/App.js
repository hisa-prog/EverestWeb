import './App.css';
import Header from './Header/Header'
import background from './img/background.png'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, height: '1080px'}}>
      <Header />
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={card3} />
          </div>
          <div class="content">
            <h2>Night on the slope of Everest </h2>
            <p>
            Experience a virtual night on the slope of Everest. 
            You will be greeted by a crazy howl of the wind, a very beautiful and clear night sky,
             as well as cold weather that you will never feel 
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgBx">
            <img src={card2} />
          </div>
          <div class="content">
            <h2>Descent from everest on a snowboard </h2>
            <p>
            Make a virtually breathtaking and dangerous descent from Everest on a snowboard,
            where in many places in the snow and ice cover of the slopes there are huge cracks and real abysses hundreds of meters deep. 
            You will definitely be impressed and delighted. 
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgBx">
            <img src={card1} />
          </div>
          <div class="content">
            <h2>Everest trek</h2>
            <p>
            Take a virtual ascent to Mount Everest at 8848 meters. 
            These 360 ° panoramas cover the route to the highest point of the planet from the north from China. 
            Choose any panorama of an iconic place along the route. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
