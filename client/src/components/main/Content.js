import React from 'react';

const Content = () => {
    return (
        <section id="content" className="myScroll">
            <div className="inner">
                <div className="wrap">
                    <div className="left">
                        <h1>Lorem, ipsum dolor.</h1>
                        <div className="pic1">
                            <img src="img/c4.jpg" alt="" />
                        </div>
                        <div className="pic2">
                            <img src="img/img14.jpg" alt="" />
                            <a href="#">
                                View more<i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="txt">
                            <h2>Lorem, ipsum.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                                facere corrupti vero illum dolor non delectus placeat assumenda
                                reprehenderit fugiat, voluptatem iusto deleniti quis odit? Saepe
                                asperiores maxime eum quo
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="pic">
                            <img src="img/img5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
