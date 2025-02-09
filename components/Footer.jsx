'use client';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/constants'; 

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      className="py-8"
    >
      <hr className="border-t border-gray-100/20 mb-8" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; 2025 Qelora Edtech LLP. All rights reserved.
            </p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
