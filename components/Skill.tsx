'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { Photoshop,Illustrator } from 'iconsax-react';
type Props = {};

const Skill = (props: Props) => {
  return (
    <motion.div className='h-full flex relative flex-col text-center md:text-left xl:flex-row  justify-center xl:space-y-0 mx-auto items-center  max-w-[2000px] xl:px-10 min-h-screen  '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-ct-text-primary text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-ct-text-primary'>
        List tools i have skills on
      </h3>

        <SkillCard
        name='Photoshop'
        
        />      
    </motion.div>
  );
};

export default React.memo(Skill);
