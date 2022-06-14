import React from "react";

interface RadioButton {
  id: string;
  name: string;
}

export interface RadioOptions {
  name: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  fields: RadioButton[]
}

export interface Radio {
  title?: string;
  style?: React.CSSProperties;
  options: RadioOptions
}

const RadioButtons:React.FC<Radio> = (
  {
    title,
    style,
    options
  }) => {
  const {name, fields, onChange} = options

  const fieldElements = fields.map((field, idx) => (
    <label key={field.id}>
      <input onChange={onChange} type="radio" name={name} value={field.id} defaultChecked={idx === 0}/>
      <span className="checkmark"/>
      {field.name}
    </label>
  ))

  return (
    <div style={style} className="input-container">
      <span className="radio-title">{title}</span>
      <div className="radio-wrapper">
        {fieldElements}
      </div>
    </div>
  );
};

export default RadioButtons;
