import React from 'react';
import InputMask from "react-input-mask";
import { InputProps } from "./types";
import './Input.scss';

const DefaultInput: React.FC<InputProps> = (
  {
    type,
    placeholder,
    helperText,
    errorText,
    value,
    onChange,
    name,
    style,
    touched,
    onBlur
  }) => {
  const showDescription = errorText || helperText;
  const showPlaceholder = !!placeholder && !value;
  const hasError = !!errorText && !!touched;

  return (
    <div style={style ?? {}} className={`input-container ${hasError ? 'input-error' : ''}`}>
      <div className="input-wrapper">
        {
          type === 'tel' ? (
            <InputMask
              className="default-input"
              mask={'+389999999999'}
              type="tel"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          ) : (
            <input
              className="default-input"
              name={name}
              type={type ?? 'text'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )
        }
        {showPlaceholder && <span className="placeholder-label">{placeholder}</span>}
      </div>
      {showDescription && <span className="bottom-label">{hasError ? errorText : helperText}</span>}
    </div>
  );
};

export default DefaultInput;
