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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default Btns