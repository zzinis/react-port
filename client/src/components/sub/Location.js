import React from 'react'
import Layout from '../common/Layout'

function Location() {
    const container = useRef(null);
    const { kakao } = window;
    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
    };

    useEffect(() => {
        new kakao.maps.Map(container.current, option);
    }, []);
    return (
        <Layout name={'Location'}>
            <h1>Location</h1>
            <p>Lorem, ipsum.</p>
        </Layout>
    )
}

export default Location