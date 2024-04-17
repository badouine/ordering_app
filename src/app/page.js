/* eslint-disable react/jsx-no-undef */
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionHeaders from './components/layout/Sectionheaders';


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        
      </section>
      
    </>
  )
}
