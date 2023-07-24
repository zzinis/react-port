import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/'></Route>
					<Route path='/visual' element={<Visual />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
