import Image from 'next/image'
import maroonBorderWeb from '../../public/backgrounds/maroon/web/top.svg'
import maroonBorderMobile from '../../public/backgrounds/maroon/mobile/top.svg'
import purpleBorderWeb from '../../public/backgrounds/purple/web/top.svg'
import purpleBorderMobile from '../../public/backgrounds/purple/mobile/top.svg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full h-full absolute font-maple">
      <div className="flex w-full h-full flex-col justify-between">
        <div className='grid grid-cols-12 grid-rows-{10} gap-4 mx-6 md:mx-32 mt-16'>
          <div className='row-start-0 row-end-1 col-span-full md:col-start-9 md:col-end-13 flex justify-between text-base text-maroon font-bold'>
            <a href="mailto:alexkoppara@gmail.com" rel="noopener noreferrer" target="_blank">SAY HI</a>
            <a href="https://github.com/AlexKoppara/" rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/alex-koppara/" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
          </div>
          <h1 className='text-darkPink text-4xl md:text-6xl col-span-full md:col-span-8 row-start-1 row-end-2'>
            <span className='text-maroon'>alex koppara</span> is a founding software engineer at <span className='text-maroon underline'>juniper (yc w21)</span> and freelance consultant for early-stage startups.
          </h1>
          <div className='col-span-full row-start-2 row-end-3'>
            <p className='font-bold text-maroon'>SELECTED WORK</p>
          </div>
          <div className='row-start-3 row-end-4 col-start-1 col-end-4'>
            <p className='text-2xl text-maroon'>Juniper (YC W21)</p>
            <p className='text-2xl text-maroon'>Founding Software Engineer</p>
            <p className='text-darkPink'>Lorem Ipsem</p>
          </div>
          <div className='row-start-3 row-end-4 col-start-5 col-end-9'>
            <p className='text-2xl text-maroon'>Maveli Coffee</p>
            <p className='text-2xl text-maroon'>Founder</p>
            <p className='text-darkPink'>Lorem Ipsem</p>
          </div>
          {/* <div className='row-start-4 row-end-5 col-start-1 col-end-4'>
            <p>TEST</p>
          </div>
          <div className='row-start-4 row-end-5 col-start-5 col-end-9'>
            <p>TEST</p>
          </div> */}
        </div>
        <div className='w-full block md:hidden -mb-1'>
          <Image
            priority
            src={maroonBorderMobile}
            alt="Maroon Border"
            fill
            className='!relative no-drag'
          />
        </div>
        <div className='w-full hidden md:block -mb-1'>
          <Image
            priority
            src={maroonBorderWeb}
            alt="Maroon Border"
            fill
            className='!relative no-drag'
          />
        </div>
      </div>
      <div className="bg-maroon flex w-full h-full flex-col justify-between">
        <div className='grid grid-cols-12 grid-rows-{4} gap-4 mx-6 md:mx-32 mt-2'>
          <div className='col-span-full md:col-span-3'>
            <p className='text-base text-lightPink font-bold'>FREELANCE SERVICES</p>
          </div>
          <div className='col-span-full md:col-start-4 md:col-end-13 text-base text-lightPink'>
            <p className='text-darkPink text-3xl md:text-5xl'><span className='text-lightPink'>i work with clients who</span> know their business model, strategy, and audience, but <span className='text-lightPink'>need an experienced, holistic thinking, lead-level engineer</span> capable of executing on all aspects of development on a project.</p>
            <p className='text-darkPink text-2xl'>My clients normally hire me for:</p>
            <p className='text-2xl'>Strategy</p>
            <p className='text-2xl'>Development</p>
            <p className='text-2xl'>Leadership</p>
          </div>
        </div>
        <div className='w-full block md:hidden -mb-1'>
          <Image
            priority
            src={purpleBorderMobile}
            alt="Purple Border"
            fill
            className='!relative no-drag'
          />
        </div>
        <div className='w-full hidden md:block -mb-1'>
          <Image
            priority
            src={purpleBorderWeb}
            alt="Purple Border"
            fill
            className='!relative no-drag'
          />
        </div>
      </div>
      <div className="bg-darkPurple w-full h-full">
        <p>Section 3</p>
      </div>
    </main>
  )
}
