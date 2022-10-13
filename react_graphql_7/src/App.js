import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './pages/movies';
import People from './pages/people';
import PeopleDetails from './pages/peopleDetails';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Movies' element={<Movies />}></Route>
        <Route path='/Person' element={<People />}></Route>
        <Route path='/personDetails/:personId' element={<PeopleDetails />}></Route>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
