import React from 'react';
import { ScheduleDemoBtn } from '../index';

import '../../styles/EmailForm.css';

function EmailForm() {
  return (
    <form className='email-form'>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter email address"
      />
      <label htmlFor="email">email</label>
      <div className="">
        <ScheduleDemoBtn />
      </div>
    </form>
  );
}

export default EmailForm;
