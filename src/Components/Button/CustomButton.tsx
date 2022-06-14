import React from "react";
import './Button.scss';

export interface Button {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<Button> = (
  {
    children,
    disabled,
    onClick
  }) => (
  <button onClick={onClick} disabled={disabled} className="default-btn">
    {children}
  </button>
);

export default CustomButton;
