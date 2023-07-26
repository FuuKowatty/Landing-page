// InputField.tsx
import { ChangeEvent } from 'react'
import { RequiredSymbol } from './RequiredSymbol'
import { Tooltip } from 'components/Tooltip'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  label: string
  id: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  error?: string | undefined
  touched?: boolean
}

export function InputField({
  type,
  label,
  id,
  required,
  error,
  touched,
  ...rest
}: InputFieldProps) {

  const inputProps = {
    className: `form__input ${error && touched && 'form__error'}`,
    type: type ?? 'text',
    id,
    ...rest,
  }

  return (
    <div className='form__row'>
      <label className='form__label' htmlFor={id}>
        {label} {required && <RequiredSymbol />}
      </label>
      <input {...inputProps} />
      {error && touched && <Tooltip>{error}</Tooltip>}
    </div>
  )
}
