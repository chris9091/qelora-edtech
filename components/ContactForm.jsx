import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ButtonTwo from '@components/buttons/ButtonTwo';
import { motion } from 'framer-motion';
import { fadeInUp } from '@constants/constants';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        className='w-fit bg-[#100e18]  py-1 text-white/50 text-sm rounded-md flex justify-center items-center gap-1 px-2 mx-auto border border-white/10'
      >
        <p>Contacts</p>
      </motion.div>
      <div className=' flex items-center justify-center p-6 bg-black'>
        <div className='w-full max-w-6xl rounded-lg shadow-2xl overflow-hidden'>
          <div className='flex flex-col md:flex-row'>
            {/* Left Panel */}
            <div className='md:w-1/2 p-8 bg-black relative'>
              <h2 className='text-5xl font-semibold text-white mb-4'>
                Ask whatever you have in your mind
              </h2>
              <p className='text-gray-300 pt-5 text-lg'>
                Whether you have questions or are ready to discuss your
                business, we're here to help. Reach out today.
              </p>
              <div className='space-y-4 static sm:pt-0 pt-3 sm:absolute bottom-8'>
                <div className='flex items-center text-white'>
                  <Mail size={20} className='mr-4' />
                  <span>updates@internify.online</span>
                </div>
                <div className='flex items-center text-white'>
                  <Phone size={20} className='mr-4' />
                  <span>+91 9446757659</span>
                </div>
                <div className='flex items-center text-white'>
                  <MapPin size={20} className='mr-4' />
                  <span>
                    57 12th Cross Road, Shivanagar, Rajajinagar, Bangalore,
                    Karnataka
                  </span>
                </div>
              </div>
            </div>
            {/* Right Panel / Form */}
            <form onSubmit={handleSubmit} className='md:w-1/2 p-8 '>
              <div className='mb-6'>
                <label
                  htmlFor='name'
                  className='block text-white text-sm font-medium mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full px-3 py-2 bg-gradient-to-r from-[#141222] to-[#0e0f0e] border border-white/10 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#512FEB] placeholder-gray-400'
                  placeholder='Jane Smith'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-white text-sm font-medium mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-3 py-2 bg-gradient-to-r from-[#141222] to-[#0e0f0e] border border-white/10 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#512FEB] placeholder-gray-400'
                  placeholder='jane@framer.com'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-white text-sm font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full px-3 py-2 bg-gradient-to-r from-[#141222] to-[#0e0f0e] border border-white/10 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#512FEB] placeholder-gray-400'
                  rows={4}
                  placeholder='Hi, I am reaching out for...'
                  required
                ></textarea>
              </div>
              <ButtonTwo />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
