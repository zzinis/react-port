import React, { useState } from 'react';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);

    const handleCheckboxChange = () => {
        setShowPopup(!showPopup);
    };

    const handleCloseClick = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <aside id="popup">
                    <div className="content">
                        <img src="img/cookie.png" alt="" />
                        <h1>
                            This website uses cookies<br />
                            to ensure you get the best<br />
                            experience on our website.
                        </h1>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="ck" id="ck" checked={!showPopup} onChange={handleCheckboxChange} />
                        <label htmlFor="ck">오늘 하루 그만보기</label>
                    </div>
                    <a href="#" className="close" onClick={handleCloseClick}>
                        CLOSE
                    </a>
                </aside>
            )}
        </>
    );
};

export default Popup;
