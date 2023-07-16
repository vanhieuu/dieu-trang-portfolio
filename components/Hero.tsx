'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircle from './BackGroundCircle';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello, my name's Dieu Trang ! ", 'Bringing imagination to life through art.'],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 10,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackGroundCircle />
      <img
        className='relative rounded-full w-32 h-32 mx-auto object-cover'
        src='https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/341561186_212769521391759_5287249210438376122_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nAmp6nNrIGAAX-YEnr0&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBN0XpNEO5CuynOA42riSMqCbtLyLNkVflL2lRHa4TODw&oe=64B92419'
        alt='avatar'
      />
      <div className='z-20'>
        <h2 className='text-sm   uppercase mb-2 text-ct-text-primary tracking-[15px]'>
          Graphic Designer && ILLUSTRATION ARTIST
        </h2>
        <h1 className='text-5xl mt-2 lg:text-6xl font-semibold px-10'>
          <span className='mr-3 text-ct-primary-02'>{text}</span>
          <Cursor cursorColor='#EE9E8E' />
        </h1>
        <div className='pt-5'>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#project'}>
            <button className='heroButton'>Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
