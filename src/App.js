import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  // return (
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li>
  //           <Link to="/contact">Contact</Link>
  //         </li>
  //       </ul>
  //
  //       <hr/>
  //       <Routes>
  //         <Route path="/" element={<Home/>}/>
  //         <Route path="/about" element={<About/>}/>
  //         <Route path="/contact" element={<Contact/>}/>
  //       </Routes>
  //     </div>
  // );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/product/:categoryId" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
