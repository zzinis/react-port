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
