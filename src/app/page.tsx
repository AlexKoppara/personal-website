import Image from 'next/image'
import maroonBorderWeb from '../../public/backgrounds/maroon/web/top.svg'
import maroonBorderMobile from '../../public/backgrounds/maroon/mobile/top.svg'
import purpleBorderWeb from '../../public/backgrounds/purple/web/top.svg'
import purpleBorderMobile from '../../public/backgrounds/purple/mobile/top.svg'

interface WorkExperienceType {
  companyName: string;
  jobTitle: string;
  description: string;
}

const workExperience: { [companyName: string]: WorkExperienceType } = {
  'juniper': {
    companyName: 'Juniper',
    jobTitle: 'Founding Senior Software Engineer',
    description: 'Built out core data ingestion and claim submission platform using Celery and SQS. Led user feedback sessions and built out all React customer interfaces to help users unblock their revenue. Second employee of the company and helped build out the engineering organization to 12.'
  },
  'maveli': {
    companyName: 'Maveli Coffee',
    jobTitle: 'Founder',
    description: 'DTC Coffee Roaster importing coffee from individual farms in India and roasted weekly in Brooklyn. Led operations, all sales channels, and hired out a team of 3 to further marketing and outbound sales efforts. Made a lot of people smile.'
  },
  'headway': {
    companyName: 'Headway',
    jobTitle: 'Senior Software Engineer',
    description: 'Activated over 1000 therapists by building API integration with Zocdoc and merging appointment systems. Modernized existing application authentication with token based system and roles, enabling third party RPA.'
  },
  'domio': {
    companyName: 'Domio',
    jobTitle: 'Lead Software Engineer',
    description: 'Led team of 7 engineers to build hotel guest app in React Native. Implemented rewards program with Flask and Celery. Drove direct booking percentage from 8% to 25% within one year.'
  },
  'houseRX': {
    companyName: 'House Rx',
    jobTitle: 'Software Consultant',
    description: 'Advised leadership on MVP implementation of pharmaceutical focused EHR using React and Express. Supervised team of overseas engineers and ensured timely delivery of product.'
  },
  'barsala': {
    companyName: 'Barsala',
    jobTitle: 'Software Consultant',
    description: 'Revamped checkout flow to integrate with Stripe, enabling multiple payment methods to be used for booking hotel stays. Developed with React Native Web to ensure consistency between web and mobile experience.'
  },
  '30Madison': {
    companyName: '30 Madison',
    jobTitle: 'Software Engineer',
    description: 'Built Picnic direct to consumer allergy product using React (NextJS) and Apollo GraphQL. Implemented A/B testing using Google Optimize integrated with Google Analytics.'
  },
  'capitalOne': {
    companyName: 'Capital One',
    jobTitle: 'Software Engineer',
    description: 'Developed Golang microservices to store credit decisions in PostgreSQL database. Implemented internal facing Zillow - like application using Angular for commercial real estate leads.'
  }
}

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col items-center justify-between  w-full h-full absolute font-maple">
      <div className="flex w-full h-full flex-col justify-between">
        <div className='grid grid-cols-12 grid-rows-{11} gap-4 mx-6 md:mx-32 mt-16'>
          <div className='row-start-1 row-end-2 col-span-full md:col-start-6 md:col-end-13 lg:col-start-9 lg:col-end-13 flex justify-between text-base text-maroon font-bold'>
            <a href="mailto:alexkoppara@gmail.com" rel="noopener noreferrer" target="_blank">SAY HI</a>
            <a href="https://github.com/AlexKoppara/" rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/alex-koppara/" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
          </div>
          <h1 className='text-darkPink text-4xl md:text-6xl col-span-full md:col-span-8 row-start-2 row-end-3 mt-40 md:mt-60'>
            <span className='text-maroon'>alex koppara</span> is a software engineer and freelance consultant for high growth and innovative startups.
          </h1>
          <div className='col-span-full row-start-3 row-end-3 mt-28 md:mt-60 mb-9 md:mb-14'>
            <p className='font-bold text-maroon'>SELECTED WORK</p>
          </div>

          {/* desktop view */}
          <div className='hidden md:block row-start-4 row-end-4 col-start-1 col-end-5'>
            <p className='text-2xl text-maroon'>Juniper (YC W21)</p>
            <p className='text-2xl text-maroon'>Founding Senior Software Engineer</p>
          </div>
          <div className='hidden md:block row-start-4 row-end-4 col-start-6 col-end-10'>
            <p className='text-2xl text-maroon'>Maveli Coffee</p>
            <p className='text-2xl text-maroon'>Founder</p>
          </div>
          <p className='hidden md:block text-darkPink row-start-5 row-end-5 col-start-1 col-end-5 mb-8'>{workExperience["juniper"]['description']}</p>
          <p className='hidden md:block text-darkPink row-start-5 row-end-5 col-start-6 col-end-10 mb-8'>{workExperience["maveli"]['description']}</p>
          <div className='hidden md:block row-start-6 row-end-6 col-start-1 col-end-5'>
            <p className='text-2xl text-maroon'>Headway</p>
            <p className='text-2xl text-maroon'>Senior Software Engineer</p>
          </div>
          <div className='hidden md:block row-start-6 row-end-6 col-start-6 col-end-10'>
            <p className='text-2xl text-maroon'>Domio</p>
            <p className='text-2xl text-maroon'>Lead Software Engineer</p>
          </div>
          <p className='hidden md:block text-darkPink row-start-7 row-end-7 col-start-1 col-end-5 mb-8'>{workExperience["headway"]['description']}</p>
          <p className='hidden md:block text-darkPink row-start-7 row-end-7 col-start-6 col-end-10 mb-8'>{workExperience["domio"]['description']}</p>
          <div className='hidden md:block row-start-8 row-end-8 col-start-1 col-end-5'>
            <p className='text-2xl text-maroon'>Barsala</p>
            <p className='text-2xl text-maroon'>Software Consultant</p>
          </div>
          <div className='hidden md:block row-start-8 row-end-8 col-start-6 col-end-10'>
            <p className='text-2xl text-maroon'>House Rx</p>
            <p className='text-2xl text-maroon'>Software Consultant</p>
          </div>
          <p className='hidden md:block text-darkPink row-start-9 row-end-9 col-start-1 col-end-5 mb-8'>{workExperience["barsala"]['description']}</p>
          <p className='hidden md:block text-darkPink row-start-9 row-end-9 col-start-6 col-end-10 mb-8'>{workExperience["houseRX"]['description']}</p>
          <div className='hidden md:block row-start-10 row-end-10 col-start-1 col-end-5'>
            <p className='text-2xl text-maroon'>30 Madison</p>
            <p className='text-2xl text-maroon'>Software Engineer</p>
          </div>
          <div className='hidden md:block row-start-10 row-end-10 col-start-6 col-end-10'>
            <p className='text-2xl text-maroon'>Capital One</p>
            <p className='text-2xl text-maroon'>Software Engineer</p>
          </div>
          <p className='hidden md:block text-darkPink row-start-11 row-end-11 col-start-1 col-end-5 mb-24'>{workExperience["30Madison"]['description']}</p>
          <p className='hidden md:block text-darkPink row-start-11 row-end-11 col-start-6 col-end-10 mb-24'>{workExperience["capitalOne"]['description']}</p>
          {/* end desktop view */}

          {/* mobile view */}
          <div className='block md:hidden row-start-4 row-end-4 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>Juniper (YC W21)</p>
            <p className='text-2xl text-maroon'>Founding Senior Software Engineer</p>
            <p className='text-darkPink mt-3'>{workExperience["juniper"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-5 row-end-5 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>Maveli Coffee</p>
            <p className='text-2xl text-maroon'>Founder</p>
            <p className='text-darkPink mt-3'>{workExperience["maveli"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-6 row-end-6 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>Headway</p>
            <p className='text-2xl text-maroon'>Senior Software Engineer</p>
            <p className='text-darkPink mt-3'>{workExperience["headway"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-7 row-end-7 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>Domio</p>
            <p className='text-2xl text-maroon'>Lead Software Engineer</p>
            <p className='text-darkPink mt-3'>{workExperience["domio"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-8 row-end-8 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>Barsala</p>
            <p className='text-2xl text-maroon'>Software Consultant</p>
            <p className='text-darkPink mt-3'>{workExperience["barsala"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-9 row-end-9 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>House Rx</p>
            <p className='text-2xl text-maroon'>Software Consultant</p>
            <p className='text-darkPink mt-3'>{workExperience["houseRX"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-10 row-end-10 col-span-full mb-6'>
            <p className='text-2xl text-maroon'>30 Madison</p>
            <p className='text-2xl text-maroon'>Software Engineer</p>
            <p className='text-darkPink mt-3'>{workExperience["30Madison"]['description']}</p>
          </div>
          <div className='block md:hidden row-start-11 row-end-11 col-span-full mb-14'>
            <p className='text-2xl text-maroon'>Capital One</p>
            <p className='text-2xl text-maroon'>Software Engineer</p>
            <p className='text-darkPink mt-3'>{workExperience["capitalOne"]['description']}</p>
          </div>
          {/* end mobile view */}
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
        <div className='grid grid-cols-12 grid-rows-{4} gap-4 mx-6 md:mx-32 mt-2 mb-16'>
          <div className='col-span-full md:col-span-3'>
            <p className='text-base text-lightPink font-bold'>FREELANCE SERVICES</p>
          </div>
          <div className='col-span-full md:col-start-4 md:col-end-13 text-base text-lightPink'>
            <p className='text-darkPink text-3xl md:text-5xl'><span className='text-lightPink'>i work with clients who</span> know their business model, strategy, and audience, but <span className='text-lightPink'>need an experienced, holistic thinking, lead-level engineer</span> capable of executing on all aspects of development on a project.</p>
            <p className='text-darkPink text-2xl my-6 md:my-9'>My clients normally hire me for:</p>
            <ul>
              <li className='text-2xl'><span className='pl-2 md:pl-4'>Strategy</span></li>
              <li className='text-2xl'><span className='pl-2 md:pl-4'>Development</span></li>
              <li className='text-2xl'><span className='pl-2 md:pl-4'>Leadership</span></li>
            </ul>
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
        <div className='grid grid-cols-12 grid-rows-2 gap-4 mx-6 md:mx-32 mt-2 mb-16'>
          <h1 className='text-lightPurple text-4xl md:text-6xl row-span-1 col-span-full'>wanna collaborate?</h1>
          <h1 className='text-lavender underline text-4xl md:text-6xl row-span-2 col-span-full'><a href="mailto:alexkoppara@gmail.com" rel="noopener noreferrer" target="_blank">say hi!</a></h1>
          <div className='mt-8 col-span-full col-start-1 col-end-12 md:col-start-1 md:col-end-5 flex justify-between text-base text-lavender font-bold'>
            <a href="https://github.com/AlexKoppara/" rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/alex-koppara/" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
          </div>
        </div>
      </div>
    </main>
  )
}
