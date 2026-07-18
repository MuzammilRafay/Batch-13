import React from "react";

function Header(props) {
  // we are recieving the value from parent component
  //   console.log(props, "props");
  //   const { btnName } = props;
  return (
    <h2>
      {/* Header <button>{btnName}</button> */}
      Header <button>{props.btnName}</button>
      Header <button>{props.valueTwo}</button>
    </h2>
  );
}

export default Header;
