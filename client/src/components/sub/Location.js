import React from 'react'
import Layout from '../common/Layout'
import { useRef, useEffect, useState } from 'react';

function Location() {
    const container = useRef(null);
    const [Traffic, setTraffic] = useState(false);
    const [Location, setLocation] = useState(null);
    const [Index, setIndex] = useState(0);
    console.log(Index);
    // const { kakao } = window;
    // const option = {
    //     center: new kakao.maps.LatLng(33.450701, 126.570667),
    //     level: 3,
    // };
    const { kakao } = window;
    const info = [
        {
            title: '강남역',
            latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
        {
            title: '카카오 본사',
            latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
        {
            title: '서울역',
            latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
            imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
            imgSize: new kakao.maps.Size(232, 99),
            imgPos: { offset: new kakao.maps.Point(116, 99) },
        },
    ];
    const option = { center: info[Index].latlng, level: 3 };
    const imgSrc = info[Index].imgSrc;
    const imgSize = info[Index].imgSize;
    const imgPos = info[Index].imgPos;
    useEffect(() => {
        const mapInstance = new kakao.maps.Map(container.current, option);
        mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
        mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

        const marker = new kakao.maps.Marker({
            position: option.center,
        });

        marker.setMap(mapInstance);
        setLocation(mapInstance);

    }, [Index]);

    useEffect(() => {
        Traffic
            ? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
            : Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }, [Traffic]);
    return (
        <Layout name={'Location'}>
            <h1>Location</h1>
            <p>Lorem, ipsum.</p>
            <div id='map' ref={container}></div>
            <button onClick={() => setTraffic(!Traffic)}>{Traffic ? 'Traffic ON' : 'Traffic OFF'}</button>
            <ul className='branch'>
                {info.map((el, idx) => {
                    return (
                        <li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
                            {el.title}
                        </li>
                    );
                })}
            </ul>
        </Layout>
    )
}

export default Location