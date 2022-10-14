import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Route-based code splitting (lazy Loading)
const Movies = lazy(() => import('./pages/movies'));
const People = lazy(() => import('./pages/people'));
const PeopleDetails = lazy(() => import('./pages/peopleDetails'));
const PageNotFound = lazy(() => import('./pages/pageNotFound'));
const Starships = lazy(() => import('./pages/starships'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Movies' element={<Movies />}></Route>
          <Route path='/Person' element={<People />}></Route>
          <Route path='/personDetails/:personId' element={<PeopleDetails />}></Route>
          <Route path='/Starships' element={<Starships />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
