import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './components/pages/mainPage/MainPage';
import { AboutPage } from './components/pages/aboutPage/AboutPage';
import { PricingPage } from './components/pages/pricingPage/PricingPage';
import { ContactsPage } from './components/pages/contactsPage/ContactsPage';
import { BlogPage } from './components/pages/blogPage/BlogPage';
import { DetailBlog } from './components/pages/detailBlog/DetailBlog';
import { ScrollRestoration } from './components/ScrollRestoration';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <MainPage />
                <Footer theme='light' />
              </div>
            </ScrollRestoration>
          }
          />
          <Route path='/about' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <AboutPage />
                <Footer theme='dark' />
              </div>
            </ScrollRestoration>
          }
          />
          <Route path='/pricing' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <PricingPage />
                <Footer theme='dark' />
              </div>
            </ScrollRestoration>
          }
          />

          <Route path='/blog' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <BlogPage />
                <Footer theme='light' />
              </div>
            </ScrollRestoration>
          }
          />
          <Route path='/contactUs' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <ContactsPage />
                <Footer theme='dark' />
              </div>
            </ScrollRestoration>
          }
          />
          <Route path='/detailBlog' element={
            <ScrollRestoration>
              <div className="App">
                <Header />
                <DetailBlog />
                <Footer theme='dark' />
              </div>
            </ScrollRestoration>
          }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
