import React, { useState } from 'react';

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	}
	return (
		<header id='header'>
			<div className="inner">
				<h1><a href="#">PORTFOLIO</a></h1>
				<nav className={`menuWeb ${isMenuOpen ? 'on' : ''}`}>
					<ul id="gnb">
						<li className="m_depart">
							<a href="department.html">DEPARTMENT</a>
							<div className="sub">
								<div className="wrap">
									<div className="sub_con1">
										<img src="img/word3.jpg" alt="" />
										<h2>Department</h2>
									</div>
									<div className="sub_con2">
										<img src="img/word5.jpg" alt="" />
									</div>
									<div className="sub_con3">
										<h3>Our Company</h3>
										<ul>
											<li><a href="#">Introduce</a></li>
											<li><a href="#">Member</a></li>
											<li><a href="#">Cooperative company</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li className="m_youtube">
							<a href="youtube.html">YOUTUBE</a>
							<div className="sub">
								<div className="wrap">
									<div className="sub_con1">
										<h2>YOUTUBE</h2>
										<ul>
											<li><a href="#">Video</a></li>
											<li><a href="#">Playlist</a></li>
										</ul>
									</div>
									<div className="sub_con2">
										<img src="img/word1.jpg" alt="" />
									</div>
								</div>
							</div>
						</li>
						<li className="m_community">
							<a href="community.html">COMMUNITY</a>
							<div className="sub">
								<div className="wrap">
									<article>
										<p>Lorem, ipsum.</p>
										<h2><a href="#">Notice</a></h2>
										<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolores.</span>
										<img src="img/img7.jpg" alt="" />
									</article>
									<article>
										<p>Lorem, ipsum.</p>
										<h2><a href="#">FAQ</a></h2>
										<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolores.</span>
										<img src="img/img5.jpg" alt="" />
									</article>
									<article>
										<p>Lorem, ipsum.</p>
										<h2><a href="#">Service</a></h2>
										<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolores.</span>
										<img src="img/img8.jpg" alt="" />
									</article>
								</div>
							</div>
						</li>
						<li className="m_gallery">
							<a href="gallery.html">GALLERY</a>
							<div className="sub">
								<div className="wrap">
									<div className="sub_con1">
										<h2>GALLERY</h2>
										<img src="img/img7.jpg" alt="" />
									</div>
									<div className="sub_con2">
										<img src="img/img8.jpg" alt="" />
										<ul>
											<li><a href="gallery.html">Artist</a></li>
											<li><a href="gallery.html">Photos</a></li>
											<li><a href="gallery.html">Etc</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li className="m_location">
							<a href="location.html">LOCATION</a>
							<div className="sub">
								<div className="wrap">
									<div className="sub_con1">
										<article>
											<h2>LOCATION</h2>
											<p>Lorem, ipsum dolor.</p>
											<span>Lorem ipsum dolor sit<br /> amet consectetur adipisicing elit.<br /> A, placeat.</span>
											<ul>
												<li><a href="#">How To Come</a></li>
												<li><a href="#">Contact</a></li>
												<li><a href="#">FAQ</a></li>
											</ul>
										</article>
									</div>
									<div className="sub_con2">
										<img src="img/pic2.jpg" alt="" />
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div className="form-text">
						<p>
							<input type="text" id="searchText" />
							<button className="searchBtn" type="submit">
								<i className="fas fa-search"></i>
							</button>
						</p>
					</div>
					<ul className="util">
						<li>
							<a href="#">
								<i className="far fa-heart"></i>
							</a>
						</li>
						<li>
							<a href="join.html">
								<i className="far fa-user"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fab fab fab fab fa-facebook-square"></i>
							</a>
						</li>
					</ul>
				</nav>

				<a href="#" className="btnCall">
					<span>메뉴호출</span>
				</a>
				<nav className="menuMo">
					<h1>
						<a href="index.html">PORTFOLIO</a>
					</h1>

					<ul id="gnbMo">
						<li>
							<a href="department.html">DEPARTMENT</a>
						</li>
						<li>
							<a href="youtube.html">YOUTUBE</a>
						</li>
						<li>
							<a href="community.html">COMMUNITY</a>
						</li>
						<li>
							<a href="gallery.html">GALLERY</a>
						</li>
						<li>
							<a href="location.html">LOCATION</a>
						</li>
					</ul>
				</nav>

			</div>


		</header>
	);
}

export default Header;
