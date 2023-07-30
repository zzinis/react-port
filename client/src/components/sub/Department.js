import React, { useState } from 'react';
import Layout from '../common/Layout';

function Department() {
	const [Members, setMembers] = useState([]);

	return (
		<Layout name={'Department'}>
			<h2>department</h2>
		</Layout>
	);
}

export default Department;
