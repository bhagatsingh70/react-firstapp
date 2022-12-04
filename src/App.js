//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Lists from './pages/lists';
import Signup from './pages/signup';
import Login from './pages/login';
import Subscription from './pages/subscription/Subscription';
import Blogs from './pages/blogs/blogs';
import NewContext from './context/NewContext';

function App() {
  return (
    <NewContext>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/about' element={<About/>} />
      <Route exact path='/'   element={<Home />} />
      <Route   path='/home'   element={<Home />} />
      <Route   path='/lists'   element={<Lists />} />
      <Route   path='/signup'   element={<Signup />} />
      {sessionStorage.getItem("navigation")!='yes' && 
        <Route   path='/login'   element={<Login />} />
      }
      <Route   path='/blogs' element={<Blogs />} />
      <Route   path='/subscription'   element={<Subscription />} />
     
      {/* <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
    </Router> 
    </NewContext>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
