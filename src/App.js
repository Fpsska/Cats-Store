import './App.scss';
import './assets/scss/reset.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CardList from './components/Card/CardLits';
// import store from './Redux/store';

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
            </select>
            <select className="controls__menu controls__menu_age">
              <option>Возрасту</option>
            </select>
          </div>
          <div className="gallery">
            <CardList/>
            <button className="gallery__button button">Показать еще 3</button>
            <button className="pagination"></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
