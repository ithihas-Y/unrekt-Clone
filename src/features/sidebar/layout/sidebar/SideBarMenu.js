import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SideBarConfig from './MenuConfig';

import DropdownMenu from './DropdownMenu';
import HomeMenu from './HomeMenu';
import {VaultMenu, Vault1Menu, ZapMenu, WrapMenu } from './VaultMenu';
//import Dropdown from 'react-bootstrap/Dropdown';

import userImage from '../../images/user.jpg';
import { SocialButtons } from 'components/SocialButtons';

let renderCustomHorizontalThumb = ({ style, ...props }) => {
                        
    const thumbStyle = {
        backgroundColor: `rgba(0,0,0,0)`,
        width:'4px',
        right:'-2px'
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
}




function SideBarMenu() {

    let initialMenuItems = [];
    SideBarConfig.menus.forEach( (menu, index) => {
        let active = menu.active ? menu.active : false;
        initialMenuItems.push({
            active:active
        });
    });

    
    const [menuItems , setMenuItems] = useState(initialMenuItems);
    
    const handleMenuDropDownClick = (e,index) => {
        let newArray = menuItems.map( ( item, idx ) => {
            // check if index equal to current clicked so put inverse value otherwise set to false (collapse other menu)
            (index === idx) ? item.active = !item.active : item.active = false;
            return item;
        });
        setMenuItems([
            ...newArray
        ]);
    }
    
    const renderSideBarMenuItem = () => {
        return !SideBarConfig["menus"].length ? "" : (
            
            SideBarConfig.menus.map( (menu , index ) => {
                
                let liElementList = "";
                if (menu.type === 'header') {
                    liElementList = <li className="header-menu"><span>{menu.title}</span></li>;
                }else if(menu.type === 'home' ) {
                    liElementList = <HomeMenu menu={menu}   />;
                } else if(menu.type === 'vault' ) {
                    liElementList =  <VaultMenu menu={menu} />;
                }else if(menu.type === 'vault1' ) {
                    liElementList =  <Vault1Menu menu={menu} />;
                }else if(menu.type === 'zap' ) {
                    liElementList =  <ZapMenu menu={menu} />;
                }else if(menu.type === 'wrap' ) {
                    liElementList =  <WrapMenu menu={menu} />;
                }
                
                return liElementList;
            })
        )
    }

    const CustomDropDownToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href="#/nothing"
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
    ));

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <Scrollbars
                    renderThumbVertical={ renderCustomHorizontalThumb }>
                                            <div className="sidebar-item sidebar-brand">
                                            <a href="#header"></a>
</div>

                    <div className="sidebar-item sidebar-brand">

                        <a href="#header">Magic </a>
                        <img src={require(`images/single-assets/BNB_nav.png`)} /> <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                    {/*    <img src={require(`assets/img/dot.jpg`)}/> */}
                    </div>
                    <div className=" sidebar-brand">
                        <a href="#/header">Dark Magic </a>
                        <img
                          src={require(`images/single-assets/MATIC2.png`)}
      />                        <img
      src={require(`assets/img/dot.jpg`)}
/>
                    </div>
                    
                    <div className=" sidebar-item sidebar-menu">
                         <ul>
                           {renderSideBarMenuItem()}
                        
                        </ul>
                    </div>
                </Scrollbars>
            </div>
            <div >
       
            <SocialButtons />
            </div>
        </nav>
    )
}

export default SideBarMenu;
