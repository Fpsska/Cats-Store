import './App.scss';
import './assets/scss/style.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <select className="controls__menu ">
              <option>Цене</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
            </select>
            <select className="controls__menu controls__menu_age">
              <option>Возрасту</option>
              <option>2 мес.</option>
              <option>5 мес.</option>
              <option>1 год</option>
            </select>
          </div>

          <div className="gallery">
            <div className="gallery__wrapper">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <button className="gallery__button button">Показать еще 20</button>
            <button className="pagination"></button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
