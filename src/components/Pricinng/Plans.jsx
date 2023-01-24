import React from 'react';
import { plans } from '../../contents';
import { FaCheck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../../styles/Plans.css';

function Plans() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <main
      className={`pricing-plans-container ${
        inView ? 'show-section' : 'hide-section'
      }`}
      ref={ref}
    >
      {plans.map(({ id, plan, features, price, description }) => (
        <div className="plan-container" key={id}>
          <h4>{plan} plan</h4>
          <p className="plan-description">{description}</p>
          <h3>${price}</h3>

          <ul className="plan-features">
            {features.map(({ feature, id, included }) => (
              <li key={id}>
                <div className="check">
                  {included ? <FaCheck /> : <div className="empty-div"></div>}
                </div>

                <p className={`${included ? 'feature included' : 'feature'}`}>
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <button type="button" className="secondary-button">
            request access
          </button>
        </div>
      ))}
    </main>
  );
}

export default Plans;
