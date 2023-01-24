import React from 'react';
import { Features, Hero, Navbar } from '../components';
import '../styles/Home.css'

function Home() {
  return (
    <main id='home'>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default Home;
 