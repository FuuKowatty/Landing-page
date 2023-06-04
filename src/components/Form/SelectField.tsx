import { ChangeEvent } from 'react';

interface SelectFieldProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
  }

export function SelectField({ label, id, value, onChange, options } : SelectFieldProps) {
    return (
      <div className='form__row'>
        <label className='form__label' htmlFor={id}>
          {label}
        </label>
        <select className='form__select' name={id} id={id} value={value} onChange={onChange}>
          {!value && (
            <option value='' disabled hidden>
              choose your holidays
            </option>
          )}
          {options.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  