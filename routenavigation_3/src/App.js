import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from './components/homepage';
import Details from './components/details';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/profile/:id/:name" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
