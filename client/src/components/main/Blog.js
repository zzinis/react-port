import React, { useState } from 'react'

function Blog() {
    const [sectionHeight, setSectionHeight] = useState(1000); // 초기 높이 값 설정

    // const increaseHeight = () => {
    //     setSectionHeight(sectionHeight + 100); // 높이 증가
    // };
    return (
        <section id="blog" className="myScroll" style={{ height: sectionHeight + 'px' }}>
            <div className="inner">
                <h1>BlOG</h1>
                <div className="wrap">
                    <article>
                        <div className="pic">
                            <img src="img/p1.jpg" alt="" />
                        </div>
                        <h2>MINIMUM USABLE DESIGN</h2>
                        <h3>POSTED BY ADMIN | 2021.08.31</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            possimus repudiandae mollitia esse. Eum obcaecati optio et ex
                            praesentium iusto..
                        </p>
                    </article>
                    <article>
                        <div className="pic">
                            <img src="img/p5.jpg" alt="" />
                        </div>
                        <h2>MINIMUM USABLE DESIGN</h2>
                        <h3>POSTED BY ADMIN | 2021.08.31</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            possimus repudiandae mollitia esse. Eum obcaecati optio et ex
                            praesentium iusto..
                        </p>
                    </article>
                    <article>
                        <div className="pic">
                            <img src="img/p3.jpg" alt="" />
                        </div>
                        <h2>MINIMUM USABLE DESIGN</h2>
                        <h3>POSTED BY ADMIN | 2021.08.31</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            possimus repudiandae mollitia esse. Eum obcaecati optio et ex
                            praesentium iusto..
                        </p>
                    </article>
                </div>
                <a href="#">Read More</a>
            </div>
        </section>

    );
};

export default Blog