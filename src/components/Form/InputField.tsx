// InputField.tsx
import { ChangeEvent } from 'react';
import { RequiredSymbol } from './RequiredSymbol';
import { Tooltip } from 'components/Tooltip';

interface InputFieldProps {
  type?: string;
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly? : boolean;
  required?: boolean;
  error?: string | undefined;
  touched?: boolean;
}

export function InputField({ type, label, id, placeholder, value, onChange, readonly, required, error, touched }: InputFieldProps) {
  return (
    <div className='form__row'>
      <label className='form__label' htmlFor={id}>
        {label}  {required && <RequiredSymbol />}
      </label>
      <input
        className={`form__input ${error && touched && 'form__error'}`}
        type={type || 'text'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readonly}
      />
      {error && touched && <Tooltip>{error}</Tooltip>}
    </div>
  );
}


