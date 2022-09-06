import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import sponsorsData from '../../assets/static-data/sponsors';

const Sponsors = () => {
    const [data] = useState(sponsorsData);

    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <section className="tf-section our-creater bg-style " id="resources">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="tf-title style4 mg-bt-38">Resources</h2>
                        <h5 className="sub-title help-center mg-bt-32 ">
                            Bloggers, developers and other contributors in the crypto world.
                        </h5>
                    </div>
                    {
                        data.slice(0,visible).map((item,index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12">
                                <div className="sc-card-collection style-2">
                                    <div className="card-bottom">
                                        <div className="author">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <img src={item.imgAuthor} alt="Axies" className='avatar' />
                                                    <div className="badge"></div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h4><Link to="/author-02">{item.name}</Link></h4>
                                                <div className="infor">
                                                    <span>{item.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="sc-button fl-button pri-3"><span>{item.buttonLabel}</span></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        visible < data.length &&
                        <div className="col-md-12 wrap-inner load-more text-center">
                            <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
