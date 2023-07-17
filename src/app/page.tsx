import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WorkExperience from '../../components/WorkExperience';
import Skill from '../../components/Skill';

export default function Home() {
  return (
    <div className='bg-ct-primary-04 text-ct-text-primary h-full  snap-y snap-mandatory  z-0 '>
      <Head>DieuTrang's Portfolio</Head>
      {/*Header*/}
      <Header />

      {/*Hero*/}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className='snap-center'>
        <Skill />
      </section>
    </div>
  );
}
