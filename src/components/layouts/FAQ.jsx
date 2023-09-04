import React , { useState } from 'react';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'How can I stake with TedCrypto?',
                text: 'You can stake your tokens directly from your wallet or you can use our TedLotto app.\n\nWallet: Go to your preferred assets, hit stake and search for Tedcrypto.\nTedlotto: Connect your wallet to [Tedlotto App](http://lotto.tedcrypto.io), choose your preferred network from the home panel and follow the instructions on the Stake tab.\n\nDelegate and start earning! Thanks for your support.'
            },
            {
                key: "1",
                title: 'Can I lose crypto by staking?',
                text: 'Staking is a way of earning inflation rewards for holding crypto. Hardly you will lose crypto by staking it.\n What can happen is a devaluation of the currency while your tokens are staked/locked. \nWhen you stake your tokens we, validators, don\'t have access to it.'
            },
            {
                key: "2",
                title: 'Can I withdraw my crypto?',
                text: 'You can choose to withdraw your delegated crypto at any time however, it needs to pass through an unbonding period of 14 to 21 days (depending on chain) before it is available to trade. \nUnbonding period is a security mechanism applied in cosmos-based chains. \nThis mechanism helps secure the chain and also - in case your wallet gets compromised - if some unstakes tokens on your behalf you have this period to do something about it before it gets to the wrong hands (this is what we do at [Cosmos Guardian]{www.cosmosguardian.com})'
            },
            {
                key: "3",
                title: 'Can I re-delegate after already delegating my crypto?',
                text: 'Yes, most of the networks allow you to re-delegate your tokens without having to wait for the unbonding period. \nRe-delegation tool is perfect to keep the delegated power split between all validators. \nNo validator should have the majority of power as that can compromise governance and the entire project!'
            },
            {
                key: "4",
                title: 'How do I earn crypto?',
                text: 'Proof of stake, aims to promote staking to validators so you keep the network alive whilst holding to your tokens. \nThis mechanism also allows delegators to earn a % of rewards for the tokens they delegate.'
            },
            {
                key: "5",
                title: 'What is this "commission"?',
                text: 'Validator Commission is a commission charged by the validator for operational costs. \nThe average Validator Commission is between 5-10% from total rewards, depending on the chain. \nSome Validators might have 0% commission, but not only you can run into problems with it, they can change comission at anytime, so beware of marketing gimmicks. \nTheyre also excluded from airdrops most of the times.'
            },
        ]
    )
    return (
            <section className="tf-section wrap-accordion" id="FAQ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Look through our most common FAQ below. Can't find an answer? Reach out to us at any time!
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default FAQ;
