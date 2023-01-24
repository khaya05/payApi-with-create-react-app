import React from 'react';
import { useInView } from 'react-intersection-observer';
import { EasyToImplementIcon } from '../../assets';
import '../../styles/EasyToImplement.css';

function EasyToImplement() {
  const { ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="implement"
      className={`${inView ? 'show-section' : 'hide-section'}`}
      ref={ref}
    >
      <div className="section__container">
        <figure className="section__figure">
          <img src={EasyToImplementIcon} alt="" aria-hidden="true" />
        </figure>
        <div className="implement__right section__right">
          <h2>Easy to implement</h2>
          <p className="section__p">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We
            <span>
              {' '}
              built our documentation page to integrate payments functionality
              with ease.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default EasyToImplement;
