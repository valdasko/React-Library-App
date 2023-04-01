import './styles/reset.css';
import './styles/App.css';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddBook from './components/pages/AddBook';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/addnewbook" element={AddBook} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
