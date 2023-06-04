// InputField.tsx
import { ChangeEvent } from 'react';

interface InputNumberFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputNumberField({ label, id, placeholder, value, onChange  }: InputNumberFieldProps) {
    
  return (
    <div className='form__row'>
      <label className='form__label' htmlFor={id}>
        {label}
      </label>
      <input
        className='form__input'
        type={'tel'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}


