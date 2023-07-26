import { RequiredSymbol } from './RequiredSymbol'
import { Tooltip } from 'components/Tooltip'

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined
  touched?: boolean
}

const genders = ['Male', 'Female', 'Other'] as const;

export function RadioGenderInputs({ value, onChange, required, error, touched }: RadioInputProps) {
  return (
    <div className='form__row'>
      <label className='form__label'>Gender {required && <RequiredSymbol />}</label>
      <div className='form__radio-group'>
        {genders.map((gender, index) => (
          <label className='form__radio-label' key={index}>
          <input
            className='form__radio'
            type='radio'
            name='gender'
            value={gender}
            checked={value === gender}
            onChange={onChange}
          />
          {gender}
        </label>
        ))}
      </div>
      {error && touched && <Tooltip>{error}</Tooltip>}
    </div>
  )
}
