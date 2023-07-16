'use client';
import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='text-2xl top-24 absolute uppercase tracking-[20px] text-ct-text-primary'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326170695_884250879442733_3503206433299418163_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Kj4XQs3HuEcAX_-3tlg&_nc_ht=scontent.fhan14-1.fna&oh=00_AfABxPVrAGI7YAQCNfTeZyMeS9daVSZfmib38jIf_VAicg&oe=64B8F4FA'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl text-ct-text-primary font-semibold'>
          Here is a{' '}
          <span className='underline decoration-ct-primary-02'>little</span>{' '}
          background{' '}
        </h4>
        <p className='text-sm'>
          Hi, my name is Điêu Huyền Trang, but you can call me Điêu Trang. I am
          currently working as a freelancer in product design for companies and
          individuals. Additionally, I am a color theory instructor at an art
          academy, teaching a university exam preparation course for art-related
          majors. I possess skills in graphic design and illustration. I excel
          in communication and teamwork, and I can handle work pressure
          effectively.
        </p>
      </div>
    </div>
  );
};

export default About;
