import React, { useEffect, useRef, useState } from 'react';
import './Tooltip.scss';
import useOverflow from "../../Hooks/useOverflow";

interface Tooltip {
  children: React.ReactNode;
  className?: string;
  position?: 'bottom' | 'bottomRight' | '';
}

const Tooltip:React.FC<Tooltip> = (
  {
    children,
    className
  }) => {
  const ref = useRef(null);
  const overflow = useOverflow(ref);
  const [isOverflow, setIsOverflow] = useState(false);

  const {refXOverflowing, refYOverflowing} = overflow;

  useEffect(() => {
      setIsOverflow(refYOverflowing || refXOverflowing);
  }, [refXOverflowing, refYOverflowing]);

  return (
    <div className={`text-wrapper ${className ?? ''}`}>
      <div ref={ref} className="text-content">{children}</div>
      {
        isOverflow && (
          <div className="text-tooltip">{children}</div>
        )
      }
    </div>
  );
};

export default Tooltip;
