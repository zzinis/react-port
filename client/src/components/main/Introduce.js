import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';

const Introduce = () => {
    return (
        <section id="introduce" className="myScroll">
            <div className="inner">
                <div className="wrap">
                    <article>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <div className="txt">
                            <h2>BRANDING / IDENTITY</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea reprehenderit soluta tenetur eius velit.</p>
                        </div>
                    </article>
                    <article>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="txt">
                            <h2>BRANDING / IDENTITY</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea reprehenderit soluta tenetur eius velit.</p>
                        </div>
                    </article>
                    <article>
                        <div className="icon">
                            <FontAwesomeIcon icon={faMedal} />
                        </div>
                        <div className="txt">
                            <h2>BRANDING / IDENTITY</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea reprehenderit soluta tenetur eius velit.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
