import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HOME from "./home";
import NotFound from './NotFound';
import Movie from './Movie';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav"></div>
        <div className="contents">
          <Routes>
            <Route path='/' element={<HOME/>}></Route>
            <Route path='/movies/:id' element={<Movie/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
