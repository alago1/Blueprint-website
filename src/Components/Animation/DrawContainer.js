import React from "react";

function DrawContainer(props) {
  const child = React.Children(props.children);

  return (
    <div>
      <span>new Promise(I will get this done later.)</span>
    </div>
  );
}

export default DrawContainer;
