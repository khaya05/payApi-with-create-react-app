import React from 'react';
import { Features, Hero, Navbar } from '../components';
import '../styles/Home.css'

function Home() {
  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default Home;
 