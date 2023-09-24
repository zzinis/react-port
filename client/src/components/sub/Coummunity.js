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
        if (!input.current.value.trim() || (!textarea.current.value.trim())) {
            resetForm();
            return alert('제목과 본문을 모두 입력하세요.');


        }
        setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
    };
    const deletePost = (delIndex) => {
        if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;

        setPosts(Posts.filter((_, idx) => idx !== delIndex));
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
        <div className='showBox'>
            {Posts.map((post, idx) => {
                return (
                    <article key={idx}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>

                        <nav className='btnSet'>
                            <button>EDIT</button>
                            <button onClick={() => deletePost(idx)}>DELETE</button>

                        </nav>
                    </article>
                );
            })}
        </div>
    </Layout>
}

export default Coummunity