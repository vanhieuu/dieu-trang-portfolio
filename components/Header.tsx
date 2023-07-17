'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { SiZalo } from 'react-icons/si';
import Link from 'next/link';

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
          fgColor='#e57e70'
          bgColor='transparent'
        />
        <div className='w-[32px] h-[32px] items-center justify-center rounded-full bg-ct-primary-02 py-auto '>
          <Link href='http://zaloapp.com/qr/p/ldp6fdp0q1wg'>
          <SiZalo color='#FFDBC3' size={26}  className='mx-auto mt-1'/>
          </Link>
        </div>
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
          fgColor='#e57e70'
          bgColor='transparent'
          url=''
        />
        <p className='uppercase hidden md:inline-flex text-sm text-ct-primary-02'>
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
