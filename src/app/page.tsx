import Image from 'next/image'
import maroonBorderWeb from '../../public/backgrounds/maroon/web/top.svg'
import maroonBorderMobile from '../../public/backgrounds/maroon/mobile/top.svg'
import purpleBorderWeb from '../../public/backgrounds/purple/web/top.svg'
import purpleBorderMobile from '../../public/backgrounds/purple/mobile/top.svg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full h-full absolute font-maple">
      <div className="flex w-full h-full flex-col justify-between">
        <div className='grid grid-cols-12 grid-rows-{4} gap-4 mx-6 md:mx-32 mt-16'>
          <div className='row-span-1 col-span-12 md:col-start-9 md:col-end-13 flex justify-between text-base text-maroon font-bold'>
            <a href="mailto:alexkoppara@gmail.com" rel="noopener noreferrer" target="_blank">SAY HI</a>
            <a href="https://github.com/AlexKoppara/" rel="noopener noreferrer" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/alex-koppara/" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
          </div>
          <h1 className='text-darkPink text-4xl md:text-6xl col-span-12 md:col-span-8 row-span-2'>
            <span className='text-maroon'>alex koppara</span> is a founding software engineer at <span className='text-maroon underline'>juniper (yc w21)</span> and freelance consultant for early-stage startups.
          </h1>
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
          <div className='col-span-12 md:col-span-3'>
            <p className='text-base text-lightPink font-bold'>FREELANCE SERVICES</p>
          </div>
          <div className='col-span-12 md:col-start-4 md:col-end-13 text-base text-lightPink'>
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
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //         Get started by editing&nbsp;
  //         <code className="font-mono font-bold">src/app/page.tsx</code>
  //       </p>
  //       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
  //         <a
  //           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{' '}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className="dark:invert"
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
  //       <Image
  //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Docs{' '}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Learn{' '}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Learn about Next.js in an interactive course with&nbsp;quizzes!
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Templates{' '}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Explore starter templates for Next.js.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Deploy{' '}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // )
}
