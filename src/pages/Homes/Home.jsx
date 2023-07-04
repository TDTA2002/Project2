import React from 'react'

import Banner from './components/Banners/Banner';
import Footer from './components/Footers/Footer';
import { Projects } from './components/Projects/Project';
import { Skills } from './components/Skills/Skills';

export default function Home() {




  return (
    <div id="home">
      <Banner />
      <Skills />
      <Projects />

      {/* <Footer /> */}
      {/* <Login/> */}
    </div>
  )
}
