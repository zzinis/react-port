import React from 'react'
import { useRef, useEffect, useState } from 'react';

function Btns() {
    const btnRef = useRef(null);
    const pos = useRef([]);
    const [Num, setNum] = useState(0); const getPos = () => {
        pos.current = [];
        const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
        setNum(pos.current.length);

    };

    useEffect(() => {
        getPos();
        window.addEventListener('resize', getPos);

        return () => {
            window.removeEventListener('resize', getPos);
        };
    }, []);
    return (
        <ul className='btnNavi' ref={btnRef}>
            {Array(Num)
                .fill()
                .map((_, idx) => {
                    return (
                        <li
                            key={idx}
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