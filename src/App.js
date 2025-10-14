import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './components/pages/mainPage/MainPage';
import { AboutPage } from './components/pages/aboutPage/AboutPage';
import { PricingPage } from './components/pages/pricingPage/PricingPage';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className="App">
              <Header />
              <MainPage />
              <Footer theme='light' />
            </div>
          }
          />
          <Route path='/about' element={
            <div className="App">
              <Header />
              <AboutPage />
              <Footer theme='dark' />
            </div>
          }
          />
          <Route path='/pricing' element={
            <div className="App">
              <Header />
              <PricingPage />
              <Footer theme='dark' />
            </div>
          }
          />
          <Route path='/blog' element={
            <div className="App">
              <Header />
            </div>
          }
          />
          <Route path='/contactUs' element={
            <div className="App">
              <Header />
            </div>
          }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
