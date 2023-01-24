import { Link } from 'react-router-dom';
import { Companies } from '../../components';
import { useInView } from 'react-intersection-observer';

import '../../styles/Brands.css';

function Brands() {
  const { ref, inView} = useInView({ threshold: 0.2, triggerOnce:true });

  return (
    <section
      id="brands"
      className={`  ${inView ? 'show-section' : 'hide-section'}`}
      ref={ref}
    >
      <div className="brands-section__container">
        <div className="brands__left">
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <Link to="./about">about us</Link>
        </div>
        <div className="companies__container">
          <Companies />
        </div>
      </div>
    </section>
  );
}

export default Brands;
