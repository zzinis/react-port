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


function Main() {
	const main = useRef(null);
	let pos = useRef([]);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};
	return (
		<>
			<Visual />
			<Popup />
			<News />
			<Introduce />
			<About />
			<Blog />
			<Content />
			<Comment />
		</>
	);
}

export default Main;
