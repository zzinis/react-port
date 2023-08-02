import React, { useEffect, useState } from 'react';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa';


function Visual() {
	// 슬라이드 이미지 다르게
	const [leftSlide, setLeftSlide] = useState(0);
	const [rightSlide, setRightSlide] = useState(0);
	const leftImages = ['img/b1.jpg', 'img/b5.jpg', 'img/c4.jpg'];
	const rightImages = ['img/b5.jpg', 'img/c4.jpg', 'img/b1.jpg'];

	const nextSlide = () => {
		setLeftSlide((prevLeftSlide) => (prevLeftSlide + 1) % leftImages.length);
		setRightSlide((prevRightSlide) => (prevRightSlide + 1) % rightImages.length);
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
					<div className="left">
						<div className="txt">
							<svg width="280" height="130" viewBox="0 0 280 30">
								<text>
									Brinkk
									<tspan dy="45" dx="-132">sideboard</tspan>
								</text>
							</svg>
							{/* <h1>Brinkk<br>sideboard</h1> */}
						</div>
						<a href="/"><FaPlayCircle /></a>
						<p>Video about product</p>
						<div className="pic">
							<img src={leftImages[leftSlide]} alt="" />
						</div>
					</div>
					<div className="right">
						<h2>About</h2>
						<div className="txtbox">
							<article>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa cupiditate quo<br /> delectus iusto dolor.
								</p>
							</article>
							<article>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, ipsum.</p>
							</article>
						</div>
						<div className="num">{`0${rightSlide + 1}.`}</div>
						<div className="pic">
							<img src={rightImages[rightSlide]} alt="" />
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
						<a href="#"><FaChevronRight /></a>
					</div>
				</div>
			</div>
		</figure>

	);
}

export default Visual;
