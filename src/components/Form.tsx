import 'sass/style.scss'

export function Form() {
  return (
    <form className='form'>
      <div className='form__section'>
        <h4 className='form__section-title'>Personal Information</h4>
        <div className='form__row'>
          <label className='form__label' htmlFor='first-name'>
            First Name
          </label>
          <input className='form__input' type='text' id='first-name' placeholder='John' />
        </div>
        <div className='form__row'>
          <label className='form__label' htmlFor='last-name'>
            Last Name
          </label>
          <input className='form__input' type='text' id='last-name' placeholder='Smith' />
        </div>
        <div className='form__row'>
          <label className='form__label'>Gender</label>
          <div className='form__radio-group'>
            <label className='form__radio-label'>
              <input className='form__radio' type='radio' name='gender' value='male' />
              Male
            </label>
            <label className='form__radio-label'>
              <input className='form__radio' type='radio' name='gender' value='female' />
              Female
            </label>
            <label className='form__radio-label'>
              <input className='form__radio' type='radio' name='gender' value='other' />
              Other
            </label>
          </div>
        </div>
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Pick your holiday</h4>
        <div className='form__row'>
          <label className='form__label' htmlFor='holiday'>
            Holiday
          </label>
          <select className='form__select' name='holiday' id='holiday'>
            <option value=''>Option 1</option>
            <option value=''>Option 2</option>
            <option value=''>Option 3</option>
            <option value=''>Option 4</option>
            <option value=''>Option 5</option>
            <option value=''>Option 6</option>
          </select>
        </div>

        <div className='form__row'>
          <label className='form__label' htmlFor='depart-date'>
            Depart
          </label>
          <input className='form__input' type='date' id='depart-date' readOnly />
        </div>
        <div className='form__row'>
          <label className='form__label' htmlFor='return-date'>
            Return
          </label>
          <input className='form__input' type='date' id='return-date' readOnly />
        </div>
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Contact</h4>
        <div className='form__row'>
          <label className='form__label' htmlFor='email'>
            Email
          </label>
          <input
            className='form__input'
            type='email'
            id='email'
            placeholder='JohnSmith1@example.pl'
          />
        </div>
        <div className='form__row'>
          <label className='form__label' htmlFor='phone'>
            Phone Number
          </label>
          <input className='form__input' type='tel' id='phone' placeholder='+1 (415) 555-2671' />
        </div>
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Additional Information</h4>
        <div className='form__row'>
          <label className='form__label' htmlFor='additional-info'>
            Label Text
          </label>
          <textarea
            className='form__textarea'
            id='additional-info'
            placeholder='I have a problem with...'
          />
        </div>
      </div>

      <button className='form__button' type='submit'>
        Make Reservation
      </button>
    </form>
  )
}
