'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Props = {};

const Project = (props: Props) => {
  const project = [1, 2, 3, 4, 5];
  const router = usePathname();
  console.log(router);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      
      className='h-screen flex flex-col text-left relative overflow-hidden overflow-y-hidden max-w-full justify-evenly mx-auto items-center z-0 md:text-row  '
    >
      <h3 className='absolute top-20  mx-auto uppercase tracking-[20px] text-ct-text-primary text-2xl'>
        Project
      </h3>

      <div className='w-screen scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e57e70]/80 flex  space-x-5 overflow-x-scroll  overflow-y-hidden  p-10 snap-x snap-mandatory relative z-20'>
        {project.map((item, index) => {
          return (
            <div key={index} className=' snap-center flex-shrink-0 flex   p-20 md:p-32 h-screen flex-col items-center  justify-center'>
              <Link
                href={`/Detail/${item.toString()}/${item}}`}
                className='snap-center flex flex-col space-y-5 items-center  justify-center '
              >
                <motion.img
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className='w-50 h-50  md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px] object-cover object-center mb-4  '
                  src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/291311699_2198637136962240_6855605563338561056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=VCHVdXAjWVMAX_dq-O4&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCIpmYN5avDk1Njx74TNXUxiM5TUanrXtN9JRyxvyaIUQ&oe=64BBFE80'
                />
                <motion.div
                  initial={{
                    x: -200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className='space-y-10 px-0 md:px-10  text-center max-w-6xl '
                >
                  <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#e57e70]'>
                      {' '}
                      Dự án {index + 1} / {project.length}
                    </span>{' '}
                    Tà Tưa Vũ Trụ
                  </h4>
                  <p className='text-lg text-center md:text-left px-20'>
                    Board game là hành trình tìm đường trở về Trái Đất của một
                    đội phi hành gia đã không may rơi vào hố đen vũ trụ và bị
                    lạc vào một chiều không gian khác mang tên “Zũ trụ tà tưa”.
                    Với thiết kế và tạo hình minh hoạ theo phong cách trẻ trung,
                    hiện đại, dễ thương, Board game sẽ là một trò chơi thú vị để
                    giải trí cũng như gắn kết mọi người ở nhiều độ tuổi, đặc
                    biệt với giới trẻ Gen Z và Gen Alpha.
                  </p>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className='w-full absolute top-[30%] bg-ct-primary-02/10 left-0 h-[500px]  -skew-y-12 ' />
    </motion.div>
  );
};

export default Project;
