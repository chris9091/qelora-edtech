'use client';
import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight-new';
import { particleOptions } from '@/constants/constants';
import { fadeInUp, fadeIn } from '@/constants/constants';

export function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      className='
        h-[40rem]
        w-full
        rounded-md
        flex
        md:items-center
        md:justify-center
        bg-black/[0.96]
        antialiased
        bg-grid-white/[0.02]
        relative
        overflow-hidden
      '
    >
      {init && (
        <Particles
          id='tsparticles'
          className='absolute inset-0 z-10 pointer-events-none'
          options={particleOptions}
        />
      )}

      <Spotlight />
      <div className='gradient-02'></div>

      <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-36 md:pt-0'>
        <motion.div
          variants={fadeIn}
          initial='hidden'
          whileInView='visible'
          className='w-fit bg-[#100e18] py-1 rounded-md flex justify-center items-center gap-1 px-2 mx-auto border border-white/10 mb-4'
        >
          <MdDashboard className='text-gray-200/70' />
          <p>Qelora Edtech LLP</p>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          className='text-4xl md:text-6xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2'
        >
          <span className='block md:hidden'>
            Transforming businesses <br />
            with Technology and <br />
            Services
          </span>
          <span className='hidden md:block'>
            Transforming businesses with <br /> Technology and Services
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'
        >
          Innovative Tech Solutions for a Smarter Tomorrow
        </motion.p>

        <div className='gradient-01'></div>
      </div>
    </div>
  );
}
