import React from "react";
import JoshLopes from "../../assets/images/team/josh_lopes.png";
import d3k010 from "../../assets/images/team/d3k010.png";
import ruim from "../../assets/images/team/RUIM.jpg";
import thomas from "../../assets/images/team/THOMAS.jpg";

const Team = () => {
    return (
        <section className="tf-contact tf-section bg-style" id="team">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="tf-title style4 mg-bt-38">Our Team</h2>
                    <h5 className="sub-title help-center mg-bt-32 ">
                        Brought together by crypto with only one goal: to bring crypto to more people
                        We're on the lookout for talented members. 
                        Reach out to find out more.
                    </h5>
                </div>
                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={JoshLopes} alt="" />
                        </div>
                        <div className="infor">
                            <h4>Luis Lopes</h4><h6> [Co-Founder]</h6><br/>
                            <p>
                                Luis, a distinguished software engineer that has amassed over a decade of experience within prominent e-commerce enterprises. 
                                Hailing from Portugal, his entrepreneurial journey commenced in 2018 with the establishment of a digital consultancy startup. 
                                Luis's ardor for open-source initiatives and a limitless global perspective distinguishes him. With a firm belief in the pervasive potential of Crypto, he eagerly anticipates its profound impact on the world. 
                                As a Co-Founder of TedCrypto, Luis is instrumental in steering the company toward a future of boundless innovation.
                            </p><br/>
                            <h5>Lead Dev</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={d3k010} alt="" />
                        </div>
                        <div className="infor">
                            <h4>José Cunha</h4><h6> [Co-Founder]</h6><br/>
                            <p>
                                JC, a healthcare professional who is passionately entwined with the dynamics of financial markets. 
                                His venture into the world of crypto began in late 2018, marked by his self-taught approach and intensive consumption of online resources. 
                                JC's unwavering commitment to transformation underpins his philosophy. 
                                Anchored in a creed of focused determination and unwavering dedication, JC, as a Co-Founder of TedCrypto, 
                                is resolutely shaping the company's trajectory toward remarkable change.
                            </p><br/>
                            <h5>Project Manager</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={ruim} alt="" />
                        </div>
                        <div className="infor">
                            <h4>Rui Lourenço</h4><br/>
                            <p>
                                An innate curiosity for technology guided Ruim from an early age, a journey momentarily interrupted by life's demands. 
                                In 2021, he resurfaced, rekindling his passion and immersing himself in the realm of crypto. 
                                The establishment of his crypto-focused blog marked a pivotal moment, aligning his path with TedCrypto. 
                                As the adept orchestrator of social media and communications, Ruim injects the team with contagious enthusiasm.
                            </p><br/>
                            <h5>Govenrance Lead & Comms</h5>
                        </div>
                    </div>
                </div>

                <div className="sc-card-activity style-2 col-12">
                    <div className="content">
                        <div className="media">
                            <img src={thomas} alt="" />
                        </div>
                        <div className="infor">
                            <h4>Thomas Maas</h4><br/>
                            <p>
                                With a background steeped in traditional finance and accounting, Thomas ventured into the world of crypto in mid-2017.
                                Thomas bridges the chasm between financial prudence and crypto dynamism. 
                                Apart from working with Tedcrypo he's also the founder of Crypto & Taxes Portugal and co-founder of Crypto Edits.
                            </p><br/>
                            <h5>Financer</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </section>
    );
}

export default Team;
