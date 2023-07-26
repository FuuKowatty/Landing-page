import { RequiredSymbol } from './RequiredSymbol'
import { Tooltip } from 'components/Tooltip'

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: string[]
  error: string | undefined
  touched?: boolean
}

export function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  required,
  error,
  touched,
}: SelectFieldProps) {
  return (
    <div className='form__row'>
      <label className='form__label' htmlFor={id}>
        {label} {required && <RequiredSymbol />}
      </label>
      <select
        className={`form__select ${error && touched && 'form__error'}`}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      >
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
      {error && touched && <Tooltip>{error}</Tooltip>}
    </div>
  )
}
