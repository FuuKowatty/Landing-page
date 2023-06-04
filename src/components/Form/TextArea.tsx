import { ChangeEvent } from 'react';

interface TextAreaFieldProps {
    label: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  }


export function TextAreaField({ label, id, placeholder, value, onChange } :  TextAreaFieldProps) {
    return (
      <div className='form__row'>
        <label className='form__label' htmlFor={id}>
          {label}
        </label>
        <textarea
          className='form__textarea'
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  