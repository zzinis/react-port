import React from 'react';
import Visual from './Visual';
import News from './News';
import Popup from './Popup';
import Introduce from './Introduce';
import About from './About';
import Blog from './Blog';
import Content from './Content';
import Comment from './Comment';
import { useRef, useEffect } from 'react';
import Btns from './Btns';


function Main() {
	const [Scrolled, setScrolled] = useState(0);

	// const main = useRef(null);
	// let pos = useRef([]);

	// const getPos = () => {
	// 	console.log('getPos');
	// 	pos.current = [];
	// 	const secs = main.current.querySelectorAll('.myScroll');
	// 	for (const sec of secs) pos.current.push(sec.offsetTop);
	// 	console.log(pos.current);
	// };
	// useEffect(() => {
	// 	getPos();
	// 	window.addEventListener('resize', getPos);
	// 	return () => {
	// 		window.removeEventListener('resize', getPos);
	// 	}
	// }, []);
	return (
		<main>
			<Visual />
			<Popup />
			<News />
			<Introduce Scrolled={Scrolled} />
			<About />
			<Blog />
			<Content />
			<Comment />
			<Btns setScrolled={setScrolled} />
		</main>
	);
}

export default Main;
