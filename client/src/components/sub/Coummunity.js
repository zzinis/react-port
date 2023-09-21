import React from 'react'
import Layout from '../common/Layout'
import { useRef, useState, useEffect } from 'react';


function Coummunity() {

    const input = useRef(null);
    const textarea = useRef(null);
    const [Posts, setPosts] = useState([]);


    const resetForm = () => {
        input.current.value = '';
        textarea.current.value = '';
    };

    const createPost = () => {
        setPosts([...Posts, { title: input.current.value, content: textarea.current.value }]);
        resetForm();
    };

    useEffect(() => {
        console.log(Posts);
    }, [Posts]);

    return <Layout name={'Community'}>
        <h1>Community</h1>
        <p>Lorem, ipsum.</p>

        <div className='inputBox'>
            <input type='text' placeholder='제목을 입력하세요.' ref={input} />
            <br />
            <textarea cols='30' rows='3' placeholder='본문을 입력하세요.' ref={textarea}></textarea>
            <br />

            <button>cancel</button>
            <button onClick={createPost}>write</button>
        </div>
    </Layout>
}

export default Coummunity