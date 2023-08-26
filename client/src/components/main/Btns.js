import React from 'react'
import { useRef, useEffect, useState } from 'react';

function Btns() {
    console.log('btn Called');

    const btnRef = useRef(null);
    const pos = useRef([]);
    const [Num, setNum] = useState(0); const getPos = () => {
        pos.current = [];
        const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        setNum(pos.current.length);

    };
    const activation = () => {
        const base = -window.innerHeight / 2;
        const scroll = window.scrollY;
        const btns = btnRef.current.children;
        const boxs = btnRef.current.parentElement.querySelectorAll('.myScroll');


        pos.current.forEach((pos, idx) => {
            if (scroll >= pos) {
                for (const btn of btns) btn.classList.remove('on');
                btns[idx].classList.add('on');
            }
        });
    };

    useEffect(() => {
        getPos();
        window.addEventListener('resize', getPos);
        window.addEventListener('scroll', activation);


        return () => {
            window.removeEventListener('resize', getPos);
            window.removeEventListener('scroll', activation);

        };
    }, []);
    return (
        <ul className='btnNavi' ref={btnRef}>
            {Array(Num)
                .fill()
                .map((_, idx) => {
                    let defaultClass = '';
                    if (idx === 0) defaultClass = 'on';
                    return (
                        <li
                            key={idx}
                            className={defaultClass}
                            onClick={() => {
                                new Anime(window, {
                                    prop: 'scroll',
                                    value: pos.current[idx],
                                    duration: 500,
                                });
                            }}
                        ></li>
                    );
                })}
        </ul>
    )
}

export default Btns