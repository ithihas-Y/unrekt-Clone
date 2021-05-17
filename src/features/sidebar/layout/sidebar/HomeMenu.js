import React from 'react';
import { Button } from 'reactstrap'

function HomeMenu(props) {
    
    let menu = props.menu;

    return (
        <li>
        <Button
        color="success"
        href="/home#/"
        size="lg"
      >
          {menu.title}
   </Button>
   </li>
    );
}

export default HomeMenu;