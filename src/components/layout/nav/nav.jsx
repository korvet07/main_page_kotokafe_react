import React from "react";
import Button from "../../ui/button/button";

function Nav({pageUrl}) {
  return (
    <nav>
			<Button minWidth={260} link={pageUrl}>Купить билет</Button>
    </nav>
  );
}

export default Nav;
