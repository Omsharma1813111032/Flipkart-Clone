import Header from './components/Header/Header';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
