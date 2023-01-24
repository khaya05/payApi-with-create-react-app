import React from 'react';
import { useInView } from 'react-intersection-observer';
import { features } from '../../contents';
import '../../styles/OtherFeatures.css';

function OtherFeatures() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="other-features__section"
      className={`${inView ? 'show-section' : 'hide-section'}`}
    >
      <ul className="other-features_">
        {features.map(({ id, title, icon, content }, index) => (
          <li key={id} className={`feature__${index} feature`}>
            <figure>
              <img src={icon} alt="" aria-hidden="true" />
            </figure>
            <h4>{title}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OtherFeatures;
