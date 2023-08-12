import React from 'react'
import Layout from '../common/Layout'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {

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
    return <Layout name={'Youtube'}>
        <h1>Youtube</h1>
        <p>Lorem, ipsum.</p>

    </Layout>
}

export default Youtube