import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]);
	console.log(Members);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data) => {
			setMembers(data.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<h1>Company</h1>
			<p>Lorem, ipsum.</p>

			<div className="top">
				<div className="wrap">
					<div className="pic">
						<img src="img/b1.jpg" alt="" />
					</div>
					<div className="txt">
						<h2>Welcome to Lorem</h2>
						<article>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quo ducimus quam nostrum iusto soluta nesciunt, fugiat
								molestias facere voluptatem non ipsam vero veritatis
								autem numquam? Deleniti autem natus, officiis distinctio
								aperiam libero minus magni minima, odio, consequuntur amet
								accusamus rerum!
							</p>
						</article>
						<article>
							<span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Aliquid, voluptatem adipisci dolorum autem voluptates eos
								debitis sunt quia neque a, ratione eaque molestias
								voluptate, itaque commodi expedita temporibus libero quos.
							</span>
						</article>
					</div>
				</div>
			</div>

			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
						</div>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
