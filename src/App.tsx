import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { FormExample } from './pages/Form';
import PageNotFound from './pages/404';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DrawerMenu } from './components/DrawerMenu';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import { BoxCookies } from './components/Partials/BoxCookies';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <DrawerMenu>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<FormExample />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <Toaster
            toastOptions={{
              className: 'bg-zinc-500 text-white',
              style: {
                zIndex: 999999,
              },
            }}
          />
          <BoxCookies />
        </DrawerMenu>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

