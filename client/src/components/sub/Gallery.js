import React from 'react'
import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Modal from '../common/Modal';


function Gallery() {
    const openModal = useRef(null);

    const isUser = useRef(true);

    const enableEvent = useRef(true);
    const btnSet = useRef(null);
    const searchInput = useRef(null);

    const frame = useRef(null);
    // const counter = useRef(0);
    const [Loader, setLoader] = useState(true);
    const [Items, setItems] = useState([]);
    const [Index, setIndex] = useState(0);


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

        if (result.data.photos.photo.length === 0) {
            setLoader(false);
            frame.current.classList.add('on');
            const btnMine = btnSet.current.children;
            btnMine[1].classList.add('on');
            getFlickr({ type: 'user', user: '' });
            enableEvent.current = true;
            return alert('이미지 결과값이 없습니다.');
        }
        console.log(result.data.photos.photo);
        setItems(result.data.photos.photo);
        const imgs = frame.current.querySelectorAll('img');
        imgs.forEach((img) => {

            img.onload = () => {
                // ++counter.current;
                ++counter;
                console.log(counter);

                if (counter === imgs.length - 2) {
                    setLoader(false);
                    frame.current.classList.add('on');
                    enableEvent.current = true;

                }
            };
        });
    };
    const resetGallery = (e) => {
        const btns = btnSet.current.querySelectorAll('button');
        btns.forEach((el) => el.classList.remove('on'));
        e.target.classList.add('on');
        enableEvent.current = false;
        setLoader(true);
        frame.current.classList.remove('on');
    };
    const showInterest = (e) => {
        //재이벤트, 모션중 재이벤트 방지
        if (!enableEvent.current) return;
        if (e.target.classList.contains('on')) return;

        //기존 갤러리 초기화 함수 호출
        resetGallery(e);

        //새로운 데이터로 갤러리 생성 함수 호출
        getFlickr({ type: 'interest' });
        isUser.current = false;

    };

    const showMine = (e) => {
        //재이벤트, 모션중 재이벤트 방지
        if (!enableEvent.current) return;
        if (e.target.classList.contains('on')) return;

        //기존 갤러리 초기화 함수 호출
        resetGallery(e);

        //새로운 데이터로 갤러리 생성 함수 호출
        getFlickr({ type: 'user', user: '' });
    };
    const showSearch = (e) => {
        const tag = searchInput.current.value.trim();
        if (tag === '') return alert('검색어를 입력하세요.');
        if (!enableEvent.current) return;

        resetGallery(e);
        getFlickr({ type: 'search', tags: tag });
        searchInput.current.value = '';
        isUser.current = false;

    };

    useEffect(() => getFlickr({ type: 'user', user: 'username' }), []);

    return (
        <>
            <Layout name={'Gallery'}>
                <div className='btnSet' ref={btnSet}>
                    <button onClick={showInterest}>Interest Gallery</button>

                    <button className='on' onClick={showMine}>
                        My Gallery
                    </button>
                </div>

                <div className='searchBox'>
                    <input
                        type='text'
                        placeholder='검색어를 입력하세요.'
                        ref={searchInput}
                        onKeyPress={(e) => e.key === 'Enter' && showSearch(e)}
                    />
                    <button onClick={showSearch}>Seach</button>
                </div>

                <div className='frame' ref={frame}>
                    <Masonry elementType={'div'} options={{ transitionDuration: '0.5s' }}>
                        {Items.map((item, idx) => {
                            return (
                                <article key={idx}>
                                    <div className='inner'>
                                        <div
                                            className='pic'
                                            onClick={() => {
                                                openModal.current?.open();
                                                setIndex(idx);
                                            }}
                                        >
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
                                                    if (isUser.current) return;
                                                    isUser.current = true;
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

            <Modal ref={openModal}>
                <img
                    src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
                    alt={Items[Index]?.title}
                />
            </Modal>
        </>
    );
}

export default Gallery