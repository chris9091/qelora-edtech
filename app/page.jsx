'use client';

import About from '@components/About';
import ContactForm from '@components/ContactForm';
import { FeaturesSectionDemo } from '@components/Feature';
import Footer from '@components/Footer';
import { Hero } from '@components/Hero';
import { Process } from '@components/Process';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Element name="intro">
          <Hero />
        </Element>
      </div>
      <div>
        <Element name="about">
          <About />
        </Element>
      </div>
      <div>
        <Element name="process">
          <Process />
        </Element>
      </div>
      <div>
        <Element name="benefits">
          <FeaturesSectionDemo />
        </Element>
      </div>
      <div>
        <Element name="contact">
          <ContactForm />
        </Element>
      </div>
      <div>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    </div>
  );
};

export default Home;
