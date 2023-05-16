import React, { useState } from "react";

function Tab(props) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHightlight = (e) => {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlight = (e) => {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  };

  return (
    <div
      className="tab"
      onMouseOut={hideHighlight}
      onMouseMove={moveHightlight}
    >
      <div className="highlight" style={highlightStyle}></div>
      {props.children}
    </div>
  );
}

export default Tab;
