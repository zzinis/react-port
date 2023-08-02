import React from 'react'

function About() {
    return (
        <section id="about" className="myScroll">
            <div className="inner">
                <div className="left">
                    <h1>Discover inspirations interesting <span>Interior</span>Design.</h1>
                    <div className="wrap">
                        <article>
                            <div className="pic">
                                <img src="img/img10.jpg" alt="" />
                            </div>
                            <p>Interesting places in the Living Room to read books.</p>
                            <a href="#"><img src="img/btn_arrow.png" alt="Arrow" /></a>
                        </article>
                        <article>
                            <div className="pic">
                                <img src="img/img7.jpg" alt="" />
                            </div>
                            <p>Accessories and decorations for a more attractive interior.</p>
                            <a href="#"><img src="img/btn_arrow.png" alt="Arrow" /></a>
                        </article>
                    </div>
                </div>
                <div className="right">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae rem atque in est nostrum.</h2>
                    <span>About us</span>
                    <ul>
                        <li><a href="#">Place</a></li>
                        <li><a href="#">Design style</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Category</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About