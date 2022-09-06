import React, {useEffect, useState} from 'react';

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

    const getAPR = async (chain) => {
        if (chain.tags === "solana") {
            return 6;
        } else if (chain.tags === "cosmos") {
            return await getCosmosAPR(chain.slug);
        }
    }

    useEffect(() => {
        getAPR(info).then(setCurrentApr);
    }, [info]);

    return <div key={key} className="fl-item col-lg-4 col-md-6 col-sm-6">
        <div className={`sc-card-product`}>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={info.logo} alt="tedcrypto" />
                    </div>
                    <div className="info">
                        <span>{info.isPartner && "Partner" || info.isWhitelabel && "Whitelabel" || "Node"}</span>
                        <h6>{info.name}</h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current APR/APY</span>
                    <h5>~{currentApr ?? 'Loading...'}%</h5>
                </div>
            </div>
            <div className="card-bottom center">
                {info.isEnabled && <button className="sc-button style wallet fl-button pri-3">
                    <a href={info.stakeUrl} target="_blank">Stake</a>
                </button>}
                {info.isTest && <button className="sc-button style bag fl-button pri-3 no-bg">
                    Testnet
                </button>}
                {!info.isTest && !info.isEnabled && <button className="sc-button style bag fl-button pri-3 no-bg">
                    Coming Soon
                </button>}
            </div>
        </div>
    </div>
}

export default Node;