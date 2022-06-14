import React from 'react';
import './Title.scss';

interface Title {
  children?: React.ReactNode;
  variant: 'h1';
  center?: boolean;
  style?: React.CSSProperties,
}

const CustomTitle:React.FC<Title> = (
  {
    children,
    variant,
    center,
    style
  }) => {

  const styles: React.CSSProperties = {
    textAlign: center ? 'center' : 'left',
    ...style
  }

  const getTitle = () => {
    switch (variant) {
      case "h1":
        return <h1 className="default-title" style={styles}>{children}</h1>
      default:
        return <h1 className="default-title" style={styles}>{children}</h1>
    }
  }

  return getTitle();
};

export default CustomTitle;
