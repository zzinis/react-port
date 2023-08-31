import React from 'react'
import Layout from '../common/Layout'
import { useRef, useEffect, useState } from 'react';

function Location() {
    const container = useRef(null);
    const [Traffic, setTraffic] = useState(false);
    const { kakao } = window;
    const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
    };

    useEffect(() => {
        const mapInstance = new kakao.maps.Map(container.current, option);

        const marker = new kakao.maps.Marker({
            position: option.center,
        });

        marker.setMap(mapInstance);
        Traffic ? mapInstance.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC) : mapInstance.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }, [Traffic]);

    return (
        <Layout name={'Location'}>
            <h1>Location</h1>
            <p>Lorem, ipsum.</p>
            <div id='map' ref={container}></div>
        </Layout>
    )
}

export default Location