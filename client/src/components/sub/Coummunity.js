import React from 'react'
import Layout from '../common/Layout'
import { useRef, useState, useEffect } from 'react';


function Coummunity() {

    const input = useRef(null);
    const textarea = useRef(null);
    const [Posts, setPosts] = useState([]);
    const [Allowed, setAllowed] = useState(true);



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
    const enableUpdate = (editIndex) => {
        if (!Allowed) return;
        setAllowed(false);
        setPosts(
            Posts.map((post, postIndex) => {
                if (editIndex === postIndex) post.enableUpdate = true;
                return post;
            })
        );
    };
    const disableUpdate = (editIndex) => {
        setPosts(
            Posts.map((post, postIndex) => {
                if (editIndex === postIndex) post.enableUpdate = false;
                return post;
            })
        );
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
            <nav className='btnSet'>
                <button onClick={resetForm}>cancel</button>
                <button onClick={createPost}>write</button>
            </nav>
        </div>
        <div className='showBox'>
            {Posts.map((post, idx) => {
                return (
                    <article key={idx}>
                        {post.enableUpdate ? (
                            <>
                                <div className='txt'>

                                    <input type='text' defaultValue={post.title} />
                                    <br />
                                    <textarea cols='30' rows='3' defaultValue={post.content}></textarea>
                                </div>

                                <nav className='btnSet'>
                                    <button onClick={() => disableUpdate(idx)}>CANCEL</button>

                                    <button>UPDATE</button>
                                </nav>                            </>
                        ) : (
                            <>
                                <div className='txt'>
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>

                                <nav className='btnSet'>
                                    <button onClick={() => enableUpdate(idx)}>EDIT</button>
                                    <button onClick={() => deletePost(idx)}>DELETE</button>
                                </nav>
                            </>
                        )}
                    </article>
                );
            })}
        </div>
    </Layout>
}

export default Coummunity