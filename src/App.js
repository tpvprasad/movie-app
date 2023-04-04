import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from './pages/home2/Home2'
import Details from "./pages/details/Details";


function App() {
 
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/:movieSlug" element={<Details />} />
    </Routes>
  </BrowserRouter>

  )

}

export default App;
