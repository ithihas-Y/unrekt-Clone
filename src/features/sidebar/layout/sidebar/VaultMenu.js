import { Button } from 'reactstrap'
import React from 'react';

export const VaultMenu = (props) => {

    let menu = props.menu;

    return (
        <li>
            <Button
          
                color="success"
                href="/#/vault"
                size="lg"
            >
                {menu.title}
            </Button>
        </li>

    );
}




export const ZapMenu = (props) => {

    let menu = props.menu;

    return (
        <li>
        <Button
            className="w-100"
            color="success"
            href="/#/zap"
            size="lg"
        >
            {menu.title}
        </Button>
        </li>
    );
}

export const WrapMenu = (props) => {

    let menu = props.menu;

    return (
        <li>
            <Button
                className="w-100"
                color="success"
                href="/#/mwrapper"
                size="lg"
            >
                {menu.title}
            </Button>
        </li>

    );
}

export const Vault1Menu = (props) => {

    let menu = props.menu;

    return (
        <li>
            <Button
                className="w-100"
                color="success"
                href="/#/vault"
                size="lg"
            >
                {menu.title}
            </Button>

        </li>

    );
}