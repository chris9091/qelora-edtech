import { cn } from '@/lib/utils';
import { fadeInUp } from '@constants/constants';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: 'Learning Solutions',
      description:
        'Upskill for Success',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Certification Programs',
      description:
        "Validate Expertise",
      icon: <IconEaseInOut />,
    },
    {
      title: 'Software Development',
      description:
        'Innovate & Automate',
      icon: <IconCurrencyDollar />,
    },
    {
      title: 'Website Services',
      description: 'Boost Digital Presence',
      icon: <IconCloud />,
    },
    {
      title: 'Digital Marketing',
      description: 'Grow Your Reach',
      icon: <IconRouteAltLeft />,
    },
    {
      title: 'SEO & SEM',
      description:
        'Enhance Visibility',
      icon: <IconHelp />,
    },
    {
      title: 'Social Media',
      description:
        'Engage Audiences',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Analytics & Insights',
      description: 'Drive Data-Driven Decisions',
      icon: <IconHeart />,
    },
  ];
  return (
    <div className='py-[5%] relative'>
      <motion.div
       variants={fadeInUp}
               initial='hidden'
               whileInView='visible'
        className='w-fit bg-[#100e18]  py-1 text-white/50 text-sm rounded-md flex justify-center items-center gap-1 px-2 mx-auto border border-white/10 mb-4'
      >
        <p>Our expertise</p>
      </motion.div>

      <motion.div
     variants={fadeInUp}
             initial='hidden'
             whileInView='visible'
        className='text-center mb-8 gap-y-4 flex flex-col'
      >
        <p className='text-5xl'>Maximize efficiency and impact</p>
        <span className='text-lg '>
          Discover the key benefits of partnering with us.
        </span>
      </motion.div>
      <div className='gradient-02'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto'>
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      )}
      {index >= 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      )}
      <div className='mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400'>
        {icon}
      </div>
      <div className='text-lg font-bold mb-2 relative z-10 px-10'>
        <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center' />
        <span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100'>
          {title}
        </span>
      </div>
      <p className='text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10'>
        {description}
      </p>
    </div>
  );
};
