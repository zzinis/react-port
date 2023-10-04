import React, { useRef } from 'react';

function Layout({ name, children, txt = 'Default' }) {
	const frame = useRef(null);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure>
				<h1>{name}</h1>
				<h2>
					{txt.split('-').map((el, idx) => {
						return (
							<React.Fragment key={idx}>
								{el}
								<br />
							</React.Fragment>
						);
					})}
				</h2>
			</figure>

			<div className='inner'>
				{children}
			</div>
		</section>
	);
}

export default Layout;
