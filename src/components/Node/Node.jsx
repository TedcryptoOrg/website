import React, {useEffect, useState, useCallback} from 'react';
import keplrIcon from '../../assets/images/stake-apps/keplr_icon.png';
import restakeIcon from '../../assets/images/stake-apps/restake_icon.png';

import axios from 'axios';

const Node = ({ key, info }) => {
    const [currentApr, setCurrentApr] = useState(null);

    async function getCosmosAPR(chain) {
        let data = null;
        try {
            data = (await axios.get('https://chains.cosmos.directory/'+chain)).data;
        } catch (err) {
            console.log(err);
            return "?";
        }

        if (
            !data.hasOwnProperty('chain')
            || !data.chain.hasOwnProperty('params')
            || !data.chain.params.hasOwnProperty('calculated_apr')
        ) {
            return "?";
        }

        return (data.chain.params.calculated_apr * 100).toFixed(2);
    }

    const getAPR = useCallback(async (chain) => {
        if (chain.tags === "solana") {
            return 6;
        } else if (chain.tags === "cosmos") {
            return await getCosmosAPR(chain.slug);
        }
    }, [])

    useEffect(() => {
        getAPR(info).then(setCurrentApr);
    }, [getAPR, info]);

    return <div key={key} className="fl-item col-lg-4 col-md-6 col-sm-6">
        <div className={`sc-card-product`}>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={info.logo} alt="tedcrypto" />
                    </div>
                    <div className="info">
                        <span>{(info.isPartner && "Partner") || (info.isWhitelabel && "Whitelabel") || "Node"}</span>
                        <h6>{info.name}</h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current APR/APY</span>
                    <h5>~{currentApr ?? 'Loading...'}%</h5>
                </div>
            </div>
            <div className="card-bottom">
                {info.isEnabled && (
                    <div className="info">
                        <h6>Stake with:</h6><br/>
                        {Object.entries(info.stakeUrl).map(([key, url]) => (
                            <span>
                                <a href={url.url ?? url} target="_blank" rel="noreferrer">
                                    <img
                                        src={url.hasOwnProperty('logo') ? url.logo : (key === 'keplr' ? keplrIcon : restakeIcon)}
                                        width="20px"
                                        alt={`${key} icon`}
                                    /> <span style={{fontSize: '15px'}}>{key}</span>
                                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        ))}
                    </div>
                )}
                {info.isTest && <button className="sc-button style bag fl-button pri-3 no-bg">
                    <h6>Testnet</h6>
                </button>}
                {!info.isTest && !info.isEnabled && <button className="sc-button style bag fl-button pri-3 no-bg">
                    <h6>Coming Soon</h6>
                </button>}
            </div>
        </div>
    </div>
}

export default Node;