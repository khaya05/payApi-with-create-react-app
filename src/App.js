import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Pricing, Contact } from './pages';
import { Footer, ReadyToStart, ScrollToTop } from './components';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <ReadyToStart />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
