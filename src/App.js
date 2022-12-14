import './App.css';
import Header from './components/header'
import Products from './components/products';
import Values from './components/values';

function App() {
  return (
    <div className="App">
      {/* header section */}
      <Header />

      {/* banner section */}
      <div className='App-background'>
        <div className='App-background-card'>
          <h5 className='header5'>New Arrival</h5>
          <h1 className='header1'>Discover our New Collection</h1>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
          <button className='button'>BUY NOW</button>
        </div>
      </div>

      {/* core values section */}
      <div className='Value-box Value-banner'>
        <Values name="Free Delivery" svg="./assets/icons/free-delivery.svg" desc="Lorem ipsum dolor sit amet."/>
        <Values name="Support 24/7" svg="./assets/icons/support247.svg" desc="Lorem ipsum dolor sit amet."/>
        <Values name="100% Authentic" svg="./assets/icons/authentic.svg" desc="Lorem ipsum dolor sit amet."/>
      </div>

      {/* product section */}
      <div>
        <Products />
      </div>
    </div>
  );
}

export default App;
