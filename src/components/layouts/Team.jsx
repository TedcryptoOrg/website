import React from "react";
import JoshLopes from "../../assets/images/team/josh_lopes.png";
import d3k010 from "../../assets/images/team/d3k010.png";
import Bt from "../../assets/images/team/bt.jpg";

const Team = () => {
    return (
        <section className="tf-contact tf-section bg-style" id="team">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="tf-title style4 mg-bt-38">Our Team</h2>
                    <h5 className="sub-title help-center mg-bt-32 ">
                        Brought together by crypto with only one goal: to bring crypto to more people
                        We're on the lookout for talented members. Reach oasdasdasdut to find out more.
                    </h5>
                </div>
                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={JoshLopes} alt="" />
                        </div>
                        <div className="infor">
                            <h4>Josh_Lopes</h4><br/>
                            <p>
                                Luis, 32 years old, is a software engineer and a crypto enthusiasdasdast.<br/>
                                Living in Portugal.<br/>
                                Having worked +10 Years in e-commerce companies.<br />
                                Started his own startup in 2018 for digital consultancy.
                            </p><br/>
                            <p>
                                "I'm very passionated about open source projects and open world
                                with the right mindset. I do believe in the potential of Crypto in the world and
                                I'm very excited to see how it will impact the world."asdsadsd
                            </p><br/>
                            <h5>Co-Founder of TedCrypto</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={d3k010} alt="" />
                        </div>
                        <div className="infor">
                            <h4>d3k010</h4><br/>
                            <p>
                                JC, healthcare professional, 38 years old, resident in France,
                                passionate about the financial markets, involved in crypto since late 2018,
                                self-taught and aggressive consumer of information available on the web.<br/>
                                Be able to aspire to change
                            </p><br/>
                            <p>
                                "The basis of success is based on focus, continuous work and dedication 🙏"
                            </p><br/>
                            <h5>Co-Founder of TedCrypto</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={Bt} alt="" />
                        </div>
                        <div className="infor">
                            <h4>BT</h4><br/>
                            <p>
                                BT, crypto enthusiast and passionate about economics and finance. <br/>
                                Likes innovation and interaction between people
                            </p><br/>
                            <p>
                                "I believe in give more than receive"
                            </p><br/>
                            <h5>Blockinvest blogger / Community Manager</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
}

export default Team;
