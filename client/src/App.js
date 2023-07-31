import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Department from './components/sub/Department';
import './scss/style.scss';
import News from './components/main/News';
import Visual from './components/main/Visual';
import Main from './components/main/Main';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Main />}>
					</Route>
					<Route path='/department' element={Department}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
