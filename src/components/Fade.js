import React, { useEffect, useState } from "react";

export default function Fade({ visible, children }) {
  const [showChildren, setShowChildren] = useState(visible);
  useEffect(() => {
    if (visible) {
      setShowChildren(true);
    } else {
      setTimeout(() => {
        setShowChildren(false);
      }, 500);
    }
  }, [visible]);

  let className = "fade";
  if (!visible) {
    className += "out";
  }
  return <div className={className}>{showChildren && children}</div>;
}
