import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { Notifier } from "features/common"
import { makeStyles } from "@material-ui/core/styles";
import { useConnectWallet, useDisconnectWallet } from './redux/hooks';
import { createWeb3Modal } from '../web3';
import styled from 'styled-components'
import appStyle from "./jss/appStyle.js";
import NetworksProvider from 'components/NetworksProvider/NetworksProvider';
import { networkSetup } from 'common/networkSetup';
import ColorNavBar from 'components/Header/ColorNavBar';

const useStyles = makeStyles(appStyle);

export default function App({ children }) {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  const classes = useStyles();
  const { t } = useTranslation();

  const {
    connectWallet,
    web3,
    address,
    networkId,
    connected,
    connectWalletPending,
  } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState(null);

  useEffect(() => {
    setModal(createWeb3Modal(t));
  }, [setModal, t]);

  useEffect(() => {
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [web3Modal, connectWallet]);
  
  useEffect(() => {
    if (
      web3 &&
      address &&
      !connectWalletPending &&
      networkId &&
      Boolean(networkId !== Number(process.env.REACT_APP_NETWORK_ID))
    ) {
      networkSetup(process.env.REACT_APP_NETWORK_ID).catch(e => {
        console.error(e);
        alert(t('Network-Error'));
      });
    }
  }, [web3, address, networkId, connectWalletPending, t]);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg1" : "";

  const NavTabBoxLeft = styled.div`
  position: absolute;
  overflow:auto;
  background: none;
  @media screen and (max-width: 1260px) {
    display:none;
  }
`


useEffect(() => {
  setModal(createWeb3Modal(t));
}, [setModal, t]);

useEffect(() => {
  if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
    connectWallet(web3Modal);
  }
}, [web3Modal, connectWallet]);


useEffect(() => {
  if (
    web3 &&
    address &&
    !connectWalletPending &&
    networkId &&
    Boolean(networkId !== Number(process.env.REACT_APP_NETWORK_ID))
  ) {
    networkSetup(process.env.REACT_APP_NETWORK_ID).catch(e => {
      console.error(e);
      alert(t('Network-Error'));
    });
  }
}, [web3, address, networkId, connectWalletPending, t]);




  return (
    <NetworksProvider className="space-100" >
    <SnackbarProvider>
      <div className={classes.page}>

            <ColorNavBar
              address={address}
              connected={connected}
              connectWallet={() => connectWallet(web3Modal)}
              disconnectWallet={() => disconnectWallet(web3, web3Modal)}
            />
    
  
  
             <div>
            <div className={classes.children}>
            {Boolean(networkId === Number(process.env.REACT_APP_NETWORK_ID)) && children}              
              <Notifier />
            </div>
        </div>
        

      </div>
    </SnackbarProvider>
    </NetworksProvider>

  );
}
