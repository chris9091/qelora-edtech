'use client';

import { TextGenerateEffect } from '@components/ui/text-generate-effect';
import { fadeInUp } from '@constants/constants';
import { motion } from 'framer-motion';
const About = () => {
  const words = `At Qelora Edtech LLP, we are a multi-vertical organization committed to empowering individuals and businesses through education, technology, and marketing.
`;

  return (
    <div className='py-[5%] px-[21%] relative'>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        className='w-fit bg-[#100e18] py-1 text-white/50 text-sm rounded-md flex justify-center items-center gap-1 px-2 mx-auto border border-white/10 mb-4'
      >
        <p>Who We Are</p>
      </motion.div>
      <TextGenerateEffect duration={2} filter={false} words={words} />
    </div>
  );
};
export default About;
