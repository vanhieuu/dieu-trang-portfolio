'use client'
import { Location } from 'iconsax-react';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:dieuhuyentrang2904@gmail.com?subject=${formData.message}$body=${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-full flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px]   text-ct-text-primary text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 mt-40 mb-20'>
        <div className='flex flex-col items-center'>
          <h4 className='text-4xl font-semibold text-center'>
            Nếu ấn tượng về tôi.{''}
          </h4>
          <span className='decoration-[#e57e70]/30 underline text-4xl font-semibold text-center '>
            {`\nLiên hệ tại`}{' '}
          </span>
        </div>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <BsFillTelephoneFill className='text-ct-primary-02 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+8468814702</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <AiTwotoneMail className='text-ct-primary-02 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>dieuhuyentrang2904@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <Location
              variant='Bold'
              className='text-ct-primary-02 h-7 w-7 animate-pulse'
            />
            <p className='text-2xl'>Tây Mỗ, Nam Từ Liêm, Hà Nội, Việt Nam</p>
          </div>
        </div>
        <form
          className='flex flex-col space-y-2 w-fit mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Tên'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='text'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Chủ đề'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Nội dung'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-ct-primary-02 py-5 px-10 rounded-md text-ct-text-primary font-bold text-lg'
          >
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
