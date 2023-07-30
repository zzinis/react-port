import React, { useRef } from 'react';

function Layout({ name, children }) {
	const frame = useRef(null);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure></figure>

			<div className='inner'>
				<h1>{name}</h1>
				{children}
			</div>
		</section>
	);
}

export default Layout;
