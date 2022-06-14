import React, { ChangeEvent, useId, useState } from 'react';
import { InputProps } from "./types";

interface FileInput extends Omit<InputProps, 'type' | 'helperText' | 'placeholder' | 'value'> {
  value?: string
}

const FileInput:React.FC<FileInput> = (
  {
    value,
    onChange,
    errorText,
    name,
    style,
    touched,
    onBlur
  }) => {
  const [fileName, setFileName] = useState('');

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if(!!files?.length) {
      setFileName(files[0].name)
      onChange(e)
    }
  }

  const fileInputId = useId();
  const hasError = !!errorText && !!touched;

  return (
    <div  style={style ?? {}} className={`input-container ${hasError ? 'input-error' : ''}`}>
      <div className="input-wrapper file-wrapper">
        <label className="file-label" htmlFor={fileInputId}>
        <input
          id={fileInputId}
          className="default-input file-input"
          type="file"
          name={name}
          defaultValue={value}
          onChange={handleOnFileChange}
          onBlur={onBlur}
        />
          Upload
        </label>
        <div className="placeholder-label">
          <span>{!!fileName ? fileName : 'Upload your photo'}</span>
        </div>
      </div>
      {hasError && <span className="bottom-label">{errorText}</span>}
    </div>
  );
};

export default FileInput;
