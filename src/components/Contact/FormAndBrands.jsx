import React from 'react';
import Form from './Form';
import { Companies } from '../';
import { useInView } from 'react-intersection-observer';

import '../../styles/FormAndBrands.css';

function FormAndBrands() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className={`form-and-brands-container ${
        inView ? 'show-section' : 'hide-section'
      }`}
      ref={ref}
    >
      <div className="form___container">
        <Form />
      </div>
      <div className="brands___container">
        <h3 className="contact__cta">
          Join the thousands of innovators already building with us
        </h3>
        <div className="contact___companies">
          <Companies />
        </div>
      </div>
    </div>
  );
}

export default FormAndBrands;
