import React from "react";

const AIRevolution = () => {
    return (
        <>
            <section className="main" id="main">
                <img src="/12.jpg" alt="Image de fond" className="background-image" />
                <div className="content">
                    <h1>
                        AI: A Revolution, <span className="colorthree">A Fresh Start</span>
                    </h1>
                    <div className="animation">
                        <p>Shaping the Careers of Tomorrow Unlocking the Keys to Success</p>
                    </div>
                    <a href="#about" className="btn">Discover</a>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="title reveal">
                        <h2 className="section-title colorb">
                            Unleash Your Potential with Cognitiex: Innovation for Meaningful Growth
                        </h2>
                    </div>
                    <img src="/4.png" alt="Image de fond" className="background-image" />
                    <div className="content">
                        <div className="col-left reveal">
                            <a href="#services" className="btn">Explore our services</a>
                        </div>
                        <div className="col-right reveal">
                            <h2 className="content-title">
                                Cognitiex: Where Cutting-Edge Technology Meets Human Connection
                            </h2>
                            <p className="para-text">
                                Imagine turning digital challenges into springboards for success. With Cognitiex, this vision becomes reality. Our unique approach combines the sharp precision of technology with the warmth and depth of human expertise.
                            </p>
                            <p className="para-text">
                                Our mission is simple yet profound: to amplify your potential by blending the brilliance of innovation with the insights of behavioral science.
                            </p>
                            <p className="para-text">
                                Partner with Cognitiex to unlock strategic, disruptive solutions tailored to your ambitions. Your growth is our purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skills" id="skills">
                <div className="titleskill reveal">
                    <h2 className="titleskill colorw"><span>Our Expertise :</span><span>Innovation that Inspires Confidence</span></h2>
                </div>
                <div className="content">
                    <div className="column col-left reveal">
                        <h2 className="content-title">Foundations of Success: Data Science, Behavioral Psychology, and Creativity</h2>
                        <p>
                            Success is not just about tools; it’s about understanding people. With deep insights into human behavior and advanced data science techniques, we design solutions that resonate. Our strategies blend analytical precision with bold creativity, ensuring every step you take leads to measurable success
                        </p>

                        <div id="details" className="more-info reveal" style={{display:"none"}}>
                            <p>
                                Imagine knowing exactly what motivates your audience. Using advanced analytics and expert knowledge in sales psychology, we identify the emotional and logical triggers that transform prospects into loyal advocates.
                            </p>
                        </div>

                        <button className="btn">Learn more</button>
                    </div>

                    <div className="column col-right reveal">
                        <div className="skills-grid">
                            <div className="skill-card">
                                <div className="icon-container">
                                    <img src="/5.jpg" alt="marketing" />
                                </div>
                                <div className="skill-info">
                                    <h3>Marketing Strategy: Science Meets Persuasion</h3>
                                    <p>Imagine campaigns that not only reach but resonate. We harness data-driven insights and psychological expertise to craft marketing strategies that speak directly to your audience’s deepest motivations.</p>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="icon-container">
                                    <img src="/3.png" alt="Sales Psychology: Beyond Transactions" />
                                </div>
                                <div className="skill-info">
                                    <h3>Sales Psychology: Beyond Transactions</h3>
                                    <p>Empower your sales process with a deep understanding of what truly drives decisions. Connect, persuade, and build loyalty with every interaction.</p>
                                </div>
                            </div>
                            <div className="skill-card">
                                <div className="icon-container">
                                    <img src="/6.jpg" alt="Data Science: From Numbers to Narratives" />
                                </div>
                                <div className="skill-info">
                                    <h3>Data Science: From Numbers to Narratives</h3>
                                    <p>Let data tell the story of your success. With precise, actionable insights, you’ll make strategic decisions with confidence and clarity.</p>
                                </div>
                            </div>

                            <div className="skill-card">
                                <div className="icon-container">
                                    <img src="/2.png" alt="3D Design: Immersive Impact" />
                                </div>
                                <div className="skill-info">
                                    <h3>3D Design: Immersive Impact</h3>
                                    <p>Your story deserves to be seen. Dazzle your clients with visuals that inspire and immerse, leaving an unforgettable impression.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services" id="services">
                <div className="titleservice">
                    <div className="first">
                        <h2 className="titleservice">Our Services: Where Technology Meets Humanity</h2>
                        <p>
                            In a world of constant change, growth requires bold, innovative tools. At Cognitiex, we empower you to innovate, thrive, and outpace the competition.
                        </p>
                    </div>
                </div>

                <div className="content">
                    <div className="card reveal">
                        <div className="service-icon">
                        </div>
                        <div className="info">
                            <h3>Scalable Platform: Your Growth, Amplified</h3>
                            <p>
                                Our platform adapts to your evolving needs, unlocking performance gains and uncovering untapped opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="service-icon">
                        </div>
                        <div className="info">
                            <h3>Psychological Assistance: Emotion Meets Strategy</h3>
                            <p>
                                Move beyond selling. Build trust, spark emotional connections, and foster lasting relationships with your customers.
                            </p>
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="service-icon">
                        </div>
                        <div className="info">
                            <h3>Artificial Intelligence: Smarter, Faster, Better</h3>
                            <p>
                                Leverage AI to anticipate trends, optimize processes, and execute flawlessly at every stage of your strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AIRevolution;
