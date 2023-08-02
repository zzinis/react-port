import React, { useEffect, useState } from 'react';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa';

function Visual() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const leftImages = ['img/b1.jpg', 'img/b5.jpg', 'img/c4.jpg'];
	const rightImages = ['img/b5.jpg', 'img/c4.jpg', 'img/b1.jpg'];
	const leftTexts = [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa cupiditate quo delectus iusto dolor',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur? lorem con sit amet',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa cupiditate quo dolor ipsum elit Nesciunt, ipsum '
	];

	const rightTexts = [
		' Fugit culpa cupiditate quo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ipsum.',
		'Lorem ipsum dolor sit amet consectetur adipisicing.t'
	];

	const sideboardTexts = ['Brinkk', 'Another', 'lorrem'];

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % leftImages.length);
	};

	useEffect(() => {
		// Automatically change slides every 5 seconds
		const interval = setInterval(nextSlide, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<figure id="visual">
			<div className="inner">
				<div className="wrap">
					<div className={`left ${currentSlide === 0 ? 'active' : ''}`}>
						<div className="txt">
							<svg width="280" height="130" viewBox="0 0 280 30">
								<text>
									{sideboardTexts[currentSlide]}
									<tspan dy="45" dx="-132">
										sideboard
									</tspan>
								</text>
							</svg>
						</div>
						<a href="/">
							<FaPlayCircle />
						</a>
						<p>Video about product</p>
						<div className="pic">
							<img src={leftImages[currentSlide]} alt="" />
						</div>
					</div>
					<div className={`right ${currentSlide === 0 ? '' : 'active'}`}>
						<h2>About</h2>
						<div className="txtbox">
							<article>
								<p>{leftTexts[currentSlide]}</p>
							</article>
							<article>
								<p>{rightTexts[currentSlide]}</p>
							</article>
						</div>
						<div className="num">{`0${currentSlide + 1}.`}</div>
						<div className="pic">
							<img src={rightImages[currentSlide]} alt="" />
							<a href="#" className="prev"></a>
							<a href="#" className="next" onClick={nextSlide}>
								<FaChevronRight />
							</a>
						</div>
					</div>
				</div>
				<div className="bottom">
					<div className="first">
						<article>
							<p>Date</p>
							<span>April 22</span>
						</article>
						<article>
							<p>Awward</p>
							<span>May 2021</span>
						</article>
						<article>
							<p>lorem</p>
							<span>word wide</span>
						</article>
					</div>
					<div className="second">
						<p>designed</p>
						<div className="line"></div>
						<a href="#">
							<FaChevronRight />
						</a>
					</div>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
