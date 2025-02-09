'use client';
import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';
import { fadeInUp } from '@constants/constants';

export function Process() {
  return (
    <div className='py-[5%] relative'>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        className='w-fit bg-[#100e18]  py-1 text-white/50 text-sm rounded-md flex justify-center items-center gap-1 px-2 mx-auto border border-white/10 mb-4'
      >
        <p>Process</p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        className='text-center mb-8 gap-y-4 flex flex-col'
      >
        <p className='text-5xl'>Our Services</p>
        <span className='text-lg '>
          A simple, effective approach to deliver excellence.
        </span>
      </motion.div>
      <div className='gradient-02'></div>

      <ul className='grid w-[90%] mx-auto grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2'>
        <GridItem
          area='md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]'
          icon={<Box className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='Do things the right way'
          description="Running out of copy so I'll write anything."
        />
        <GridItem
          area='md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]'
          icon={
            <Settings className='h-4 w-4 text-black dark:text-neutral-400' />
          }
          title='The best AI code editor ever.'
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          area='md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]'
          icon={<Lock className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='You should buy Aceternity UI Pro'
          description="It's the best money you'll ever spend"
        />
        <GridItem
          area='md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]'
          icon={
            <Sparkles className='h-4 w-4 text-black dark:text-neutral-400' />
          }
          title='This card is also built by Cursor'
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />
        <GridItem
          area='md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
          icon={<Search className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='Coming soon on Aceternity UI'
          description="I'm writing the code as I record this, no shit."
        />
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem]  list-none ${area}`}>
      <div className='relative h-full rounded-2.5xl border border-gray-700 p-2  md:rounded-3xl md:p-3'>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className='relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6'>
          <div className='relative flex flex-1 flex-col justify-between gap-3'>
            <div className='w-fit rounded-lg border border-gray-600 p-2 '>
              {icon}
            </div>
            <div className='space-y-3'>
              <h3 className='pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white'>
                {title}
              </h3>
              <h2
                className='[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400'
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
