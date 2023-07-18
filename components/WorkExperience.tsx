'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {};

const experience = [
  {
    nameCompany: 'Lớp vẽ H.O.A House of Art',
    position: 'Giảng viên',
    timeStart: '2022',
    timeEnd: 'Nay',
    technique: false,

    img: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/284252251_107338101993731_1959047275295838292_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=aO834Lp6SEkAX9CjT67&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCMSY829bFsebYM2xUVPtVISd643R7VCIdFuetzaVogHw&oe=64B97C51',
    summary: [
      'Tham gia quá trình giảng dạy',
      'Soạn giáo án, xây dựng tài liệu môn học Bố cục và trang trí màu',
    ],
  },
  {
    nameCompany: 'Freelancer',
    position: 'Graphic Designer / Illustration Artist',
    timeStart: '2019',
    timeEnd: 'Nay',
    technique: true,

    img: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/239919534_1949655145193775_3528404383085192545_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=81flWC8qJO0AX-QLNs1&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBxu1n9VhoFK1vlO5gRv7s-juYjUD5EdyYJwwF7y0__Fw&oe=64BA9968',
    summary: [
      'Thực hiện các dự án thiết kế theo yêu cầu cá nhân, tổ chức',
      'Cập nhật xu hướng thiết kế, công cụ phần mềm và kỹ thuật để đảm bảo công việc của mình luôn mới mẻ và phù hợp.',
      'Làm việc chặt chẽ với khách hàng để hiểu nhu cầu và mục tiêu của họ, sau đó chuyển đổi những yêu cầu đó thành những thiết kế hình ảnh thú vị.'
    ],
  },

  {
    nameCompany: 'CÔNG TY CỔ PHẦN SJ MEDIA',
    position: '2D Artist',
    timeStart: '02/01/2020',
    timeEnd: '15/07/2020',
    technique: true,
    img: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/301586409_398317255772316_1782312573474029984_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g-ZHBKPZyHsAX9m6YRA&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBLiBV7hgCzzt_rQSlvJAxCWGYEAy1EGK1FYmLUMYHmfA&oe=64BA6CC4',
    summary: [
      'Vẽ Storyboard cho phim hoạt hình trên youtube',
      'Tham gia quá trình thiết kế hình ảnh nhân vật cho phim hoạt hình 2D',
      'Tham gia quá trình thiết kế hoạt cảnh cho phim hoạt hình 2D trên youtube'
    ],
  },
  {
    nameCompany: 'Công ty cổ phần truyền thông và giải trí TB Group',
    position: 'Graphic Designer',
    timeStart: '06/2019',
    timeEnd: '12/2019',
    technique: true,

    img: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/309438802_201825285569458_4248553014361120747_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=stlq1zLVOHsAX_T2Scv&_nc_ht=scontent.fhan14-2.fna&oh=00_AfA2Q1p7EkdZeRAKiDGahbvfrseWCambozN2Q0IWBce_Ng&oe=64BA31D0',
    summary: [
      'Tham gia thiết kế sản phẩm in ấn POD theo yêu cầu',
      'Thiết kế theo ý tưởng có sẵn hoặc tự sáng tạo cho thị trường Mỹ-EU theo yêu cầu',
    ],
  },
  {
    nameCompany: 'Lớp vẽ Thanh Xuân',
    position: 'Giảng viên',
    timeStart: '2018',
    timeEnd: '2022',
    technique: false,

    img: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/299996830_3318254288442284_6700370614394762680_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lfI4vnswwgcAX-lfGDQ&_nc_ht=scontent.fhan14-1.fna&oh=00_AfD9ne8MvlCdVdp-HS1qidJUnH0ycqXLbThHcpDwgrYX-w&oe=64B7E026',
    summary: [
      'Tham gia quá trình giảng dạy',
      'Soạn giáo án, xây dựng tài liệu môn học Bố cục và trang trí màu',
    ],
  },
];

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='text-2xl lg:top-0 top-20 absolute uppercase tracking-[20px] text-ct-text-primary'>
        Experience
      </h3>
      <div className=' w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e57e70]/80  '>
        {experience.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              nameCompany={item.nameCompany}
              summary={item.summary}
              position={item.position}
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              technique={item.technique}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
