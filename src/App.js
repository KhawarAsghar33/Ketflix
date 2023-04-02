import './App.css';
import Topbar from './components/Bars/Topbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Poster1 from './components/Posters/Poster1';
import Poster2 from './components/Posters/Poster2';
import Poster3 from './components/Posters/Poster3';
import Poster4 from './components/Posters/Poster4';
import MainFooter from './components/Bars/MainFooter';
import LibraryPage from './components/pages/LibraryPage';
import SubscriptionPage from './components/pages/SubscriptionPage'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route path="/" element={<Poster1 />} />
          <Route path="/poster2" element={<Poster2 />} />
          <Route path="/poster3" element={<Poster3 />} />
          <Route path="/poster4" element={<Poster4 />} />
          <Route path="/libraryPage" element={<LibraryPage />} />
          <Route path="/SubscriptionPage" element={<SubscriptionPage />} />
        </Routes>
        <MainFooter/>
      </BrowserRouter>

    </div>
  );
}

export default App;
