'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Illustrator, Photoshop } from 'iconsax-react';
type Props = {
  img: string;
  nameCompany?: string;
  position?: string;
  timeStart?: string;
  timeEnd?: string;
  summary?: any[];
  technique?: boolean;
};

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex snap-center bg-ct-primary-03 p-10 flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] '>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={props.img}
        alt={`Avatar ${props.nameCompany}`}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
      />
      <div className='px-0 md:px-10'>
        <div className='text-4xl font-light'>{props.position}</div>
        <p className='font-bold  text-2xl mt-1'>{props.nameCompany}</p>
        <div className='flex space-x-2 my-2'>
          {props.technique ? (
            <div className='flex flex-row items-center'>
              <Illustrator size='32' color='#e57e70' className='mr-2' />
              <Photoshop size='32' color='#e57e70' />
            </div>
          ) : null}
          {/*Tech used    */}
        </div>
        <p className='uppercase py-5 text-ct-text-primary  flex'>
          Bắt đầu{' '}
          <span className=' px-1 text-ct-text-primary font-bold'>
            {' '}
            {' ' + props.timeStart}{' '}
          </span>{' '}
          -{' '}
          <p className='px-1'>
            {props.timeEnd === 'Nay' ? (
              <span className='text-ct-text-primary font-bold'>
                {' '}
                {props.timeEnd}
              </span>
            ) : (
              <p>
                {' '}
                Kết thúc{' '}
                <span className='text-ct-text-primary font-bold'>
                  {' '}
                  {props.timeEnd}
                </span>{' '}
              </p>
            )}
          </p>
        </p>
        <ul className='list-disc space-y-4 ml-5 text-ct-text-primary'>
          {props.summary?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
