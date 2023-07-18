import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WorkExperience from '../../components/WorkExperience';
import Skill from '../../components/Skill';
import Project from '../../components/Project';
import ContactMe from '../../components/ContactMe';
export default function Home() {
  return (
    <div className='bg-ct-primary-04 text-ct-text-primary h-screen   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e57e70]/80  snap-y snap-mandatory   overflow-y-scroll overflow-x-hidden z-0 '>
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
      <section id='skills' className='snap-start'>
        <Skill />
      </section>
      <section id='project' className='snap-start'>
        <Project />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
}
