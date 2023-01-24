import React from 'react';
import { Heading, Navbar, Plans } from '../components';

function Pricing() {
  return (
    <main id="pricing">
      <Navbar />
      <Heading heading={'Pricing'} />
      <Plans />
    </main>
  );
}

export default Pricing;
