import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 120,
  duration: 1000
});

// Note: AOS Animation library github URL: https://github.com/michalsnik/aos

function App() {
  return (
    <div className="App">
      <p data-aos="zoom-in-down">1</p>
      <p data-aos="fade-left">2</p>
      <p data-aos="fade-right">3</p>
      <p data-aos="fade-left">4</p>
      <p data-aos="fade-right">5</p>
      <p data-aos="fade-down-right">6</p>
      <p data-aos="fade-up">7</p>
      <p data-aos="flip-down">8</p>
    </div>
  );
}

export default App;