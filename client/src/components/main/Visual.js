import React from 'react';
import { FaPlayCircle, FaChevronRight } from 'react-icons/fa';


function Visual() {
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
							<img src="img/b1.jpg" alt="" />
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
						<div className="num">01.</div>
						<div className="pic">
							<img src="img/b1.jpg" alt="" />
							<a href="#" className="prev"></a>
							<a href="#" className="next"></a>
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
