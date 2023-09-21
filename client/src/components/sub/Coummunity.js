import React from 'react'
import Layout from '../common/Layout'
import { useRef, useState, useEffect } from 'react';


function Coummunity() {

    const input = useRef(null);
    const textarea = useRef(null);
    const [Posts, setPosts] = useState([]);
    return <Layout name={'Community'}>
        <h1>Community</h1>
        <p>Lorem, ipsum.</p>
    </Layout>
}

export default Coummunity