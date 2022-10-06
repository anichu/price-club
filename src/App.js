import "./App.css";
import Chart from "./chart/Chart";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/pricing/Pricing";

function App() {
	return (
		<div className="">
			<NavBar />
			<Pricing />
			<Chart />
		</div>
	);
}

export default App;
