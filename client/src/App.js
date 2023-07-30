import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Department from './components/sub/Department';
import './scss/style.scss';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/department' element={Department}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
