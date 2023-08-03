import React from 'react';

const Comment = () => {
    return (
        <section id="comment" className="myScroll">
            <div className="inner">
                <div className="wrap">
                    <div className="left">
                        <h1>News</h1>
                        <article>
                            <div className="pic">
                                <img src="img/img1.jpg" alt="" />
                            </div>
                            <div className="txt">
                                <h2>News topic 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Corporis, odit.
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className="pic">
                                <img src="img/img8.jpg" alt="" />
                            </div>
                            <div className="txt">
                                <h2>News topic 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Corporis, odit.
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className="pic">
                                <img src="img/img13.jpg" alt="" />
                            </div>
                            <div className="txt">
                                <h2>News topic 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Corporis, odit.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="right">
                        <h1>Services</h1>
                        <div className="wrap">
                            <div className="pic"></div>
                            <div className="txt">
                                <article>
                                    <h2>Conceptual<br />Design</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Animi, fugit.
                                    </p>
                                    <a href="#">
                                        Detail<i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </article>
                                <article>
                                    <h2>Material<br />Design</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Animi, fugit.
                                    </p>
                                    <a href="#">
                                        Detail<i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </article>
                                <article>
                                    <h2>Construction <br />Management</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Animi, fugit.
                                    </p>
                                    <a href="#">
                                        Detail<i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </article>
                                <article>
                                    <h2>All<br />World</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Animi, fugit.
                                    </p>
                                    <a href="#">
                                        Detail<i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;
