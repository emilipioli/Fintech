
import './App.css';
import Header from './components/header/Header';
import Content from './components/conteudo/Content';
import Footer from './components/footer/Footer';
import Login from './components/header/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <Router>

        <Header />
        <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />

      </Router>

    </div>

  );
}

export default App;
