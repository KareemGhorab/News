import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="about" element={<About />}/>
				<Route
					path="*"
					element={
						<div className="d-flex justify-content-center align-items-center bg-dark text-light text-center">
							<h2>404 not found</h2>
							<p>Sorry we couldn't find this page</p>
						</div>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
