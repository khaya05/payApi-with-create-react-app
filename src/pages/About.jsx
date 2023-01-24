import { useInView } from 'react-intersection-observer';
import {
  Business,
  Culture,
  Heading,
  Navbar,
  People,
  Stats,
  Vision,
} from '../components';

function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const heading =
    'We empower innovators by delivering access to the financial system';

  return (
    <main id="about">
      <Navbar />
      <Heading heading={heading} />
      <div className={`${inView ? 'show-section' : 'hide-section'}`} ref={ref}>
        <Vision />
        <Business />
        <Stats />
        <Culture />
        <People />
      </div>
    </main>
  );
}

export default About;
