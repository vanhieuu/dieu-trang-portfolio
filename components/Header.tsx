'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between  max-w-7xl mx-auto xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url={'https://www.facebook.com/son.vi.7731'}
          fgColor='#EE9E8E'
          bgColor='transparent'
        />
        <SocialIcon
          url={'https://www.instagram.com/tooddieeu_/'}
          fgColor='#EE9E8E'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='#EE9E8E'
          bgColor='transparent'
          url=''
        />
        <p className='uppercase hidden md:inline-flex text-sm text-ct-primary-02'>Get In Touch</p>
      </motion.div>
    </header>
  );
}
