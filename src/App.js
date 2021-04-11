import EmotionDetection from './EmotionDetection';
import logo from './images/logo.png';


function App() {
  return (
    <div className="App">
      <header class="header">
					<div class="brand">
          <img src={logo} />
					</div>
					<div class="header-links">
					</div>
				</header>
      <EmotionDetection></EmotionDetection>
    </div>
  );
}

export default App;
