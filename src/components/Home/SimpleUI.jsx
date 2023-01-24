import { useInView } from 'react-intersection-observer';
import { simpleUIIcon } from '../../assets';
import '../../styles/SimpleUI.css';

function SimpleUI() {
  const { ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="simple-ui"
      className={`${inView ? 'show-section' : 'hide-section'}`}
      ref={ref}
    >
      <div className="section__container simple-ui-section-container">
        <figure className="simple-ui-figure">
          <img src={simpleUIIcon} alt="" aria-hidden="true" />
        </figure>
        <div className="simple-ui__right section__right">
          <h2>Simple UI & UX</h2>
          <p className="section__p">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SimpleUI;
