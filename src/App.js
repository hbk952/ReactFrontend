import "./App.css";
import Home from "./pages/home";
import Headline from "./pages/headline";
import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/news";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsState from "./context/news/NewsState";

const App=()=> {
  const apikey=process.env.REACT_APP_NEWS_API_KEY
  return (
    <NewsState>
      <div className="App">
      <Router>
      
        <Routes>
          <Route exact path="/" element={<Headline apikey={apikey} />} />
          <Route exact path="/headline" element={<Headline apikey={apikey} />} />
          <Route path="/news" element={<News />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </Router>
    </div>
    </NewsState>
  );
}

export default App;
