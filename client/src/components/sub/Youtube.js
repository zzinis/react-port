import React from 'react'
import Layout from '../common/Layout'
import axios from 'axios';
import Modal from '../common/Modal';

import { useEffect, useState, useRef } from 'react';

function Youtube() {
    const modal = useRef(null);


    const [Vids, setVids] = useState([]);
    useEffect(() => {
        const key = 'AIzaSyBWdI1Ln_7CG7buBj84llJDk9-oaDu8NCE';
        const list = 'PL7bRBTzgXVleF23FJ2Y9VsfdVcDA4kg83';
        const num = 6;
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
        axios.get(url).then((data) => {
            console.log(data.data.items);
            setVids(data.data.items);
        });
    }, []);
    return (
        <>
            <Layout name={'Youtube'}>
                <h1>Youtube</h1>
                <p>Lorem, ipsum.</p>
                <div className="wrap">
                    {Vids.map((vid, idx) => {
                        return (
                            <article key={idx}>
                                <a href="#" onClick={() => modal.current.open()}>
                                    <img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
                                </a>
                                <div className="con">
                                    <h2>{vid.snippet.title}</h2>
                                    <p> {vid.snippet.description.length > 50
                                        ? vid.snippet.description.substr(0, 50) + '...'
                                        : vid.snippet.description}</p>
                                    <span>{vid.snippet.publishedAt.substr(0, 10)}</span>
                                </div>

                            </article>

                        );
                    })}
                </div>



            </Layout>
            <Modal ref={modal}>
                <iframe title={Vids[0].id} src={`https://www.youtube.com/embed/${Vids[0].snippet.resourceId.videoId}`} frameborder='0'></iframe>
            </Modal>
        </>
    )

}

export default Youtube