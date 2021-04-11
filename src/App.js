import EmotionDetection from './EmotionDetection';
import logo from './images/logo.png';


function App() {
  return (
    <div className="App">
      <header class="header">
					<div class="brand">
          <img src={logo} alt='Regina University'/>
					</div>
					<div style={{marginLeft:30}}>
          <h2>Data Sience Learn</h2>
					</div>
				</header>
      <EmotionDetection></EmotionDetection>
    </div>
  );
}

export default App;
