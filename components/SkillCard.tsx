'use client';
import React from 'react';
import { Photoshop, Illustrator } from 'iconsax-react';
import { SiAdobeaftereffects, SiAdobeindesign } from 'react-icons/si';
import { motion } from 'framer-motion';
type Props = {
  name: string;
  iconName: string;
};

const SkillCard = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{ duration:1.2 }}
      animate={{
        x:0,
        opacity:1
      }}
      className='lg:flex gap-10 text-center  hover:scale-200 scale-100  transition-transform duration-100  shadow-lg bg-ct-primary-03 rounded-md  w-32 items-center  mx-2 justify-center   '
    >
      <div className='flex flex-col   items-center justify-center'>
        <h3 className='text-lg font-medium pt-8 pb-2 text-ct-primary-text   '>
          {props.name}
        </h3>
        <div className='my-8'>
          {props.iconName === 'Photoshop' ? (
            <Photoshop size={32} />
          ) : props.iconName === 'Illustrator' ? (
            <Illustrator size={32} />
          ) : props.iconName === 'SiAdobeaftereffects' ? (
            <SiAdobeaftereffects size={32} />
          ) : (
            <SiAdobeindesign size={32} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(SkillCard);
