import React from 'react'
import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

function Gallery() {
    const enableEvent = useRef(true);

    const frame = useRef(null);
    // const counter = useRef(0);
    const [Loader, setLoader] = useState(true);

    const [Items, setItems] = useState([]);
    const getFlickr = async (opt) => {
        counter.current = 0;
        let counter = 0;
        const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
        const key = '';
        const method_interest = 'flickr.interestingness.getList';
        const method_user = 'flickr.people.getPhotos';
        const method_search = 'flickr.photos.search';
        const num = 50;
        let url = '';
        if (opt.type === 'interest') url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
        if (opt.type === 'search')
            url = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.tags}`;
        if (opt.type === 'user')
            url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.user}`;

        const result = await axios.get(url);
        console.log(result.data.photos.photo);
        setItems(result.data.photos.photo);
        const imgs = frame.current.querySelectorAll('img');
        imgs.forEach((img) => {

            img.onload = () => {
                // ++counter.current;
                ++counter;
                console.log(counter);

                if (counter === imgs.length) {
                    setLoader(false);
                    frame.current.classList.add('on');
                }
            };
        });
    };

    useEffect(() => getFlickr({ type: 'user', user: 'username' }), []);

    return (
        <Layout name={'Gallery'}>
            <button
                onClick={() => {
                    if (!enableEvent.current) return;
                    enableEvent.current = false;
                    setLoader(true);
                    frame.current.classList.remove('on');
                    getFlickr({ type: 'interest' });
                }}
            >
                Interest Gallery
            </button>
            <button
                onClick={() => {
                    setLoader(true);
                    frame.current.classList.remove('on');
                    getFlickr({ type: 'user', user: '' });
                }}
            >
                My Gallery
            </button>
            <div className='frame' ref={frame}>
                <Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
                    {Items.map((item, idx) => {
                        return (
                            <article key={idx}>
                                <div className='inner'>
                                    <div className='pic'>
                                        <img
                                            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <div className='profile'>
                                        <img
                                            src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
                                            alt={item.owner}
                                            onError={(e) => e.target.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif')}
                                        />
                                        <span
                                            onClick={(e) => {
                                                setLoader(true);
                                                frame.current.classList.remove('on');
                                                getFlickr({ type: 'user', user: e.target.innerText });
                                            }}
                                        >
                                            {item.owner}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </Masonry>
            </div>
            {Loader && <img className='loader' src={`${process.env.PUBLIC_URL}/img/loading.gif`} alt='loader' />}
        </Layout>
    );
}

export default Gallery