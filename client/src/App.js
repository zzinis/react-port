import './App.css';
import { useRef } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Coummunity from './components/sub/Coummunity';

import './scss/style.scss';
import News from './components/main/News';
import Visual from './components/main/Visual';
import Main from './components/main/Main';
import Location from './components/sub/Location';
import Join from './components/sub/Join';



function App() {
	const menu = useRef(null);
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Main />}>
					</Route>
					<Route path='/department' element={<Department />}></Route>
					<Route path='/youtube' element={<Youtube />}></Route>
					<Route path='/community' element={<Coummunity />}></Route>
					<Route path='/location' element={<Location />}></Route>
					<Route path='/join' element={<Join />}></Route>
				</Routes>
				<Footer />
				<Menu ref={menu} />

			</BrowserRouter>
		</>
	);
}

export default App;
