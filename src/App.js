import './App.scss';
import './assets/scss/reset.scss';
import Footer from './components/Footer/Footer';

import HeaderContainer from './components/Header/HeaderContainer';
import CardContainer from './components/Card/CardContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
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
            <CardContainer />
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
