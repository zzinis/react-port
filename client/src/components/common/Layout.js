import React, { useRef } from 'react';

function Layout({ name, children }) {
	const frame = useRef(null);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure>
				<h1>{name}</h1>
			</figure>

			<div className='inner'>
				{children}
			</div>
		</section>
	);
}

export default Layout;
