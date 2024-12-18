import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Services = () => <h1>Services</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    
    );
};

export default App;
