'use client';
import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center h-screen sm:text-left sm:flex-row  px-10 justify-evenly mx-auto items-center   '>
      <h3 className='text-2xl top-24   absolute uppercase tracking-[20px] text-ct-text-primary'>
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
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-64 xl:h-64'
        src='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/326170695_884250879442733_3503206433299418163_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Kj4XQs3HuEcAX_-3tlg&_nc_ht=scontent.fhan14-1.fna&oh=00_AfABxPVrAGI7YAQCNfTeZyMeS9daVSZfmib38jIf_VAicg&oe=64B8F4FA'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl text-ct-text-primary font-semibold'>
          Một số thông tin{' '}
          <span className='underline decoration-ct-primary-02'>cơ bản</span> về
          mình{' '}
        </h4>
        <p className='text-sm'>
          Xin chào, tôi là Điêu Huyền Trang, bạn có thể gọi tôi là Điêu Trang.
          Hiện tại tôi đang làm việc như một freelancer trong lĩnh vực thiết kế sản
          phẩm cho các công ty và cá nhân. Ngoài ra, tôi cũng là giảng viên bộ
          môn bố cục và trang trí màu tại một lớp vẽ có tên là H.O.A, dạy khóa
          học chuẩn bị thi đại học cho các ngành liên quan đến nghệ thuật. Tôi
          có kỹ năng thiết kế đồ họa và minh họa. Tôi xuất sắc trong giao tiếp
          và làm việc nhóm, và có khả năng chịu áp lực công việc một cách hiệu
          quả.
        </p>
      </div>
    </div>
  );
};

export default About;
