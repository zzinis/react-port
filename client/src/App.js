import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Header />
						<Visual />
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
