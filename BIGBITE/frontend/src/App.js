


import './App.css';
import Header from './components/Layouts/Header';
import Home from "./components/Home";
import Footer from './components/Layouts/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from './components/Menu';

function App() {
  return (
    <Router>

      <div className='App'>
      <Header/>
      <div className='container container-fluid'>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path='/eats/stores/:id/menus' element = {<Menu/>} exact/>
        </Routes>
      </div>
      <Footer/>
      </div>;

    </Router>
  ) 
}

export default App;