import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'space-around'}}>
      {/* <a href='/'>Home</a> */}
      {/* its like anchor tag but it chages the like url/about only  */}
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
      {/* It swaps the components based on th url */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
