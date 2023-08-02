import { faStar, faNewspaper, faCompactDisc, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="inner">
				<h1>Contact us</h1>
				<div className="wrap">
					<div className="top">
						<div className="first">
							<h2>OUR INFORMATION</h2>
							<p>Address<br /> (우)12345</p>
							<address>서울특별시 강남구 강남대로 123<br />123, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea</address>
						</div>
						<div className="middle">
							<h2>E-MAIL</h2>
							<p>loremlorem1@naver.com</p>
						</div>
						<div className="last">
							<h2>QUICK LINK</h2>
							<ul>
								<li>
									<a href="#"><FontAwesomeIcon icon={faStar} /></a>
									Department
								</li>
								<li>
									<a href="#"><FontAwesomeIcon icon={faNewspaper} /></a>
									Community
								</li>
								<li>
									<a href="#"><FontAwesomeIcon icon={faCompactDisc} /></a>
									Gallery
								</li>
								<li>
									<a href="#"><FontAwesomeIcon icon={faMapMarkedAlt} /></a>
									Location
								</li>
							</ul>
						</div>
					</div>
					<div className="bottom">2021 DCODELAB &copy; copyright all right reserved.</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
