import React from "react";

export interface InputProps {
  type?: 'text' | 'number' | 'email' | 'tel' | 'file';
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  touched?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}