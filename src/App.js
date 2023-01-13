import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import CountDown from './components/countDown';

function App() {
  return (
    <div class="landingPage-container">
       <div class="container-fluid hero-section">
        <div className="container">
          <div>
          <>
            <Navbar />
            <LandingPage />
          </>
          </div>
          
        </div>
      </div>
      <>
        <CountDown />
      </>
    </div>
   

  );
}

export default App;
