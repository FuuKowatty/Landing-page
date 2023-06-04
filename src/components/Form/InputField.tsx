// InputField.tsx
import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly? : boolean;
}

export function InputField({ label, id, placeholder, value, onChange, readonly }: InputFieldProps) {
  return (
    <div className='form__row'>
      <label className='form__label' htmlFor={id}>
        {label}
      </label>
      <input
        className='form__input'
        type={'type'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readonly}
      />
    </div>
  );
}


