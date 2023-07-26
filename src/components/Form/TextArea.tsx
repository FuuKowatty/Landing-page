interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>  {
  label: string
}

export function TextAreaField({ label, id, placeholder, value, onChange }: TextAreaFieldProps) {
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
  )
}
