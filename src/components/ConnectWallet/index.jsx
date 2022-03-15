import React from "react";
import useCosmos from "hooks/useCosmos";

const ConnectButton = () => {
  const { connected, connectWallet, disconnectWallet } = useCosmos();
  
  return (
    <>
      {!connected? (
        <button
          className="sc-button style wallet fl-button pri-3 text-white"
          onClick={connectWallet}
          style={{marginTop: '-10px'}}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="sc-button style wallet fl-button pri-3 text-white"
          onClick={disconnectWallet}
          style={{marginTop: '-10px'}}
        >
          Disconnect wallet
        </button>
      )}
    </>
  );
};

export default ConnectButton;
