'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative  h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='text-2xl top-24 absolute uppercase tracking-[20px] text-ct-text-primary'>
        Experience
      </h3>
      <div>
        <ExperienceCard
          nameCompany='Lớp vẽ Thanh Xuân'
          position='Teacher'
          img='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/299996830_3318254288442284_6700370614394762680_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lfI4vnswwgcAX-lfGDQ&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD9ne8MvlCdVdp-HS1qidJUnH0ycqXLbThHcpDwgrYX-w&oe=64B7E026'
        />
        <ExperienceCard img='' />
        <ExperienceCard img='' />
        <ExperienceCard img='' />
        <ExperienceCard img='' />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
