import { ChangeEvent } from 'react';
import { RequiredSymbol } from './RequiredSymbol';
import { Tooltip } from 'components/Tooltip';

interface RadioInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error: string | undefined;
    touched?: boolean;
  }

export function RadioGenderInputs({ value, onChange, required, error, touched } : RadioInputProps) {
    return (
      <div className='form__row'>
        <label className='form__label'>Gender {required && <RequiredSymbol />}
        </label>
        <div className='form__radio-group'>
          <label className='form__radio-label'>
            <input
              className='form__radio'
              type='radio'
              name='gender'
              value='male'
              checked={value === 'male'}
              onChange={onChange}
            />
            Male 
          </label>
          <label className='form__radio-label'>
            <input
              className='form__radio'
              type='radio'
              name='gender'
              value='female'
              checked={value === 'female'}
              onChange={onChange}
            />
            Female
          </label>
          <label className='form__radio-label'>
            <input
              className='form__radio'
              type='radio'
              name='gender'
              value='other'
              checked={value === 'other'}
              onChange={onChange}
            />
            Other
          </label>
        </div>
        {error && touched && <Tooltip>{error}</Tooltip>}
      </div>
    );
  }