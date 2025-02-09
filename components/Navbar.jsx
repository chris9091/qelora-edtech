'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@components/buttons/Button';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full md:pt-[2%] navbar z-40"
        initial={{ y: '-100%', x: 0 }}
        animate={{ y: 0, x: 0 }}
        transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="md:px-[10%] md:mt-2">
          <div className="flex items-center justify-between rounded-md px-4 py-2 bg-black/30 backdrop-blur-sm text-white border border-white/10">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center">
              <img
                src="/qelora-logo.png"
                alt="logo"
                className="h-10 md:hidden"
              />
              <span className="hidden md:block text-xl font-md">
                Qelora Edtech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hover:bg-[#181422] rounded-md px-2 py-1">
                <ScrollLink
                  activeClass="active"
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-white transition"
                >
                  Intro
                </ScrollLink>
              </div>
              <div className="hover:bg-[#181422] rounded-md px-2 py-1">
                <ScrollLink
                  activeClass="active"
                  to="benefits"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-white transition"
                >
                  Benefits
                </ScrollLink>
              </div>
              <div className="hover:bg-[#181422] rounded-md px-2 py-1">
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-white transition"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="focus:outline-none"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar with Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black backdrop-blur-md text-white border-r border-white/20 z-40"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <img src="/qelora-logo.png" alt="logo" className="h-10" />
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="focus:outline-none"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col space-y-4">
                  <ScrollLink
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsSidebarOpen(false)}
                    className="cursor-pointer"
                  >
                    <div className="hover:bg-[#181422] rounded-md px-4 py-2">
                      Intro
                    </div>
                  </ScrollLink>
                  <ScrollLink
                    activeClass="active"
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsSidebarOpen(false)}
                    className="cursor-pointer"
                  >
                    <div className="hover:bg-[#181422] rounded-md px-4 py-2">
                      Benefits
                    </div>
                  </ScrollLink>
                  <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsSidebarOpen(false)}
                    className="cursor-pointer"
                  >
                    <div className="hover:bg-[#181422] rounded-md px-4 py-2">
                      Contact
                    </div>
                  </ScrollLink>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
