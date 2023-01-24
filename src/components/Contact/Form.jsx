import React, { useState } from 'react';
import FormInput from './FormInput';
import { inputs } from './inputs';

import '../../styles/Form.css';

function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    'company name': '',
    title: '',
    message: '',
    isSubscribed: false,
  });

  const handleChange = (e) => {
    const { name, value, className } = e.target;
    setValues((oldData) => {
      return {
        ...oldData,
        [className === 'mark' ? 'isSubscribed' : name]:
          className === 'mark' ? !oldData.isSubscribed : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          onChange={handleChange}
          value={values[input.name]}
        />
      ))}

      <div className="checkbox__container">
        <label htmlFor="subscribe" className="label">
          Stay up-to-date with company announcements and updates to our API
          <input
            type="checkbox"
            name="isSubscribed"
            className="checkbox"
            checked={values.isSubscribed}
          />
          <span className="mark" onClick={handleChange}></span>
        </label>
      </div>

      <button
        type="submit"
        onSubmit={handleSubmit}
        className="secondary-button"
      >
        submit
      </button>
    </form>
  );
}

export default Form;
