import { ChangeEvent } from 'react';

interface RadioInputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

export function RadioGenderInputs({ value, onChange } : RadioInputProps) {
    return (
      <div className='form__row'>
        <label className='form__label'>Gender</label>
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
      </div>
    );
  }