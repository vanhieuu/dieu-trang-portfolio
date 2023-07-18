'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';



const skillProps = [
  {
    name: 'PhotoShop',
    iconName: 'Photoshop',
  },
  {
    name: 'Illustrator',
    iconName: 'Illustrator',
  },
  {
    name: 'After Effect',
    iconName: 'SiAdobeaftereffects',
  },
  {
    name: 'Indesign',
    iconName: 'SiAdobeindesign',
  },
];

const Skill = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row  justify-center xl:space-y-0 mx-auto items-center  max-w-[2000px] xl:px-10 min-h-screen  '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-ct-text-primary text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-ct-text-primary'>
        List of tools I have skills in
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skillProps.map((item, index) => {
          return (
            <SkillCard name={item.name} iconName={item.iconName} key={index} />
          );
        })}
      </div>
    </motion.div>
  );
};

export default React.memo(Skill);
