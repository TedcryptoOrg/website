import React, { createContext, useState } from 'react'
import Network from "network";

export const CosmosContext = createContext({})

export const CosmosProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(undefined);
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    console.log("connectWallet")
    try {
      setLoading(true);

      if (!window.getOfflineSigner || !window.keplr) {
        //alert("Please install keplr extension");
        return; //TODO
      }

      if (!window.keplr.experimentalSuggestChain) {
        //alert("Please use the recent version of keplr extension");
        return;
      }

      try {
        // Keplr v0.6.4 introduces an experimental feature that supports the feature to suggests the chain from a webpage.
        // cosmoshub-3 is integrated to Keplr so the code should return without errors.
        // The code below is not needed for cosmoshub-3, but may be helpful if you’re adding a custom chain.
        // If the user approves, the chain will be added to the user's Keplr extension.
        // If the user rejects it or the suggested chain information doesn't include the required fields, it will throw an error.
        // If the same chain id is already registered, it will resolve and not require the user interactions.
        await window.keplr.experimentalSuggestChain(Network.comdex);
      } catch {
        console.error("Failed to suggest the chain");
      }

      const chainId = Network.comdex.chainId;

      // You should request Keplr to enable the wallet.
      // This method will ask the user whether or not to allow access if they haven't visited this website.
      // Also, it will request user to unlock the wallet if the wallet is locked.
      // If you don't request enabling before usage, there is no guarantee that other methods will work.
      await window.keplr.enable(chainId);

      const offlineSigner = window.getOfflineSigner(chainId);

      // You can get the address/public keys by `getAccounts` method.
      // It can return the array of address/public key.
      // But, currently, Keplr extension manages only one address/public key pair.
      // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();  
      console.log("accounts", accounts)

      setAddress(accounts[0]);
      setConnected(true);
    }
    catch (error) {
      console.log(error);
      setConnected(false);
    }
    finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    setConnected(false);
    /*if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }*/
  };

  return (
    <CosmosContext.Provider value={{
      loading,
      connected,
      address,
      contract,
      connectWallet,
      disconnectWallet,
      setLoading,
    }}>
      {children}
    </CosmosContext.Provider>
  )
}
