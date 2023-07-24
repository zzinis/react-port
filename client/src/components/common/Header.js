import React from 'react';

function Header() {
	return (
		<>
			<header>
				<h1>Logo</h1>

				<ul id='gnb'>
					<li>Home</li>
					<li>About</li>
					<li>Shop</li>
					<li>Notice</li>
					<li>Gallery</li>
					<li>Contact</li>
				</ul>

				<ul id='util'>
					<li>login/Join</li>
					<li>Mypage</li>
					<li>Cart</li>
				</ul>
			</header>
		</>
	);
}

export default Header;
