import React from 'react'
import Layout from '../common/Layout'
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';


function Location() {
    const container = useRef(null);
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMsg = useRef(null);
    const form = useRef(null);
    const [Traffic, setTraffic] = useState(false);
    const [Location, setLocation] = useState(null);
    const [Index, setIndex] = useState(0);
    const [Success, setSuccess] = useState(false);

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4wnjvjd', 'template_651z7ig', form.current, '23g8RepczesqKPoIX').then(
            (result) => {
                console.log(result.text);
                setSuccess(true);
                inputName.current.value = '';
                inputEmail.current.value = '';
                inputMsg.current.value = '';
            },
            (error) => {
                console.log(error.text);
                setSuccess(false);


            }
        );

    };
    useEffect(() => {
        container.current.innerHTML = '';
        const mapInstance = new kakao.maps.Map(container.current, option);
        mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
        mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

        const marker = new kakao.maps.Marker({
            position: option.center,
        });

        marker.setMap(mapInstance);
        setLocation(mapInstance);
        const setCenter = () => {
            console.log('setCenter');

            mapInstance.setCenter(info[Index].latlng);
        };

        window.addEventListener('resize', setCenter);
        return () => window.removeEventListener('resize', setCenter);

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

            <div id='formBox'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type='text' name='name' />
                    <label>Email</label>
                    <input type='email' name='email' />
                    <label>Message</label>
                    <textarea name='message' />
                    <input type='submit' value='Send' />
                </form>
            </div>
        </Layout>
    )
}

export default Location