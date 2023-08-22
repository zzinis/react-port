import React from 'react'
import { useRef, useEffect } from 'react';

function Btns() {
    const btnRef = useRef(null);
    let pos = useRef([]);
    const getPos = () => {
        pos.current = [];
        const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
        for (const sec of secs) pos.current.push(sec.offsetTop);
    };

    useEffect(() => {
        getPos();
        window.addEventListener('resize', getPos);

        return () => {
            window.removeEventListener('resize', getPos);
        };
    }, []);
    return (
        <div>Btns</div>
    )
}

export default Btns