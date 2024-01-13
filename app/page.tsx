'use client';
import { ProjectTile } from '@/components/ProjectTile';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Experience } from '@/components/Experience';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0.6 },
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function getCoordinates(e: any) {
    const position = {
      x: e.pageX,
      y: e.pageY,
    };

    return position;
  }

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
    if (inView3) {
      controls3.start('visible');
    }
  }, [controls, controls2, controls3, inView, inView2, inView3]);

  const handleMouseMove = (e: any) => {
    setMousePos(getCoordinates(e));
  };

  return (
    <div
      className="bg-black min-h-screen pb-24"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <motion.div
        className="w-[320px] h-[320px] bg-gray-300/10 hidden md:block absolute rounded-full blur-2xl -z-100"
        animate={{
          x: mousePos.x - 160,
          y: mousePos.y - 160,
        }}
        transition={{
          duration: 0.08,
          delay: 0,
          ease: 'linear',
        }}
      ></motion.div>
      {/* HERO */}
      <div className="w-[90%] md:w-[72%] mx-auto flex flex-col justify-center items-center h-screen">
        <motion.div
          className="w-full flex flex-col justify-center items-center"
          initial={{
            y: '-40%',
            opacity: 0,
          }}
          animate={{
            y: '0',
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            // type: "tween",
            delay: 0,
            ease: 'anticipate',
          }}
        >
          <p className="text-gray-400 font-bold text-[2.6rem] md:text-[3.2rem] text-center tracking-wider glow-medium">
            Hi! I&apos;m Bilal,
          </p>
          <p className="text-gray-100 font-semibold text-[1.4rem] md:text-[1.8rem] text-center glow-light tracking-widest">
            a full-stack engineer.
          </p>
        </motion.div>
        <motion.div className="w-full flex flex-col justify-center items-center mt-10">
          <motion.p
            className="text-white/30 w-3/4 md:w-1/2 my-3 text-center tracking-wide"
            initial={{
              x: '-35%',
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              x: '0',
              opacity: 1,
              rotate: 360,
            }}
            transition={{
              duration: 3.2,
              // type: "tween",
              delay: 0,
              ease: 'anticipate',
            }}
          >
            I build frontends as well as backends. Currently I&apos;m working on
            full-stack projects in blockchain domain. Checkout The Lounge below,
            a cool side project that I&apos;m building.
          </motion.p>
          <motion.div
            className="flex gap-x-8 mt-12 items-center z-10"
            initial={{
              y: '35%',
              opacity: 0,
            }}
            animate={{
              y: '0',
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              // type: "tween",
              delay: 0,
              ease: 'anticipate',
            }}
          >
            <Link
              href="https://www.linkedin.com/in/bilal-w-27789ba4/"
              target="_blank"
            >
              <Image
                className="w-9 h-9 hover:scale-110 cursor-pointer"
                src="/linkedin.svg"
                alt={'github'}
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://github.com/bilalwaheed099" target="_blank">
              <Image
                className="w-8 h-8 hover:scale-110 cursor-pointer"
                src="/github.svg"
                alt={'linkedin'}
                width={24}
                height={24}
              />
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <p className="text-gray-400 font-bold border-2 border-gray-400 rounded-lg px-2 py-1 hover:scale-110 cursor-pointer">
                Resume
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Skills */}
      <motion.div
        className="w-[72%] mx-auto mb-20"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <p className="text-3xl font-bold text-white/30 text-center mb-12 heading">
          Skills
        </p>
        <div className="flex flex-wrap justify-center gap-3 w-[90%] md:w-[64%] mx-auto">
          <p className="skill">HTML</p>
          <p className="skill">CSS</p>
          <p className="skill">Tailwind CSS</p>
          <p className="skill">JavaScript</p>
          <p className="skill">TypeScript</p>
          <p className="skill">Python</p>
          <p className="skill">React</p>
          <p className="skill">Next.js</p>
          <p className="skill">Svelte</p>
          <p className="skill">Node.js</p>
          <p className="skill">Express.js</p>
          <p className="skill">MongoDB</p>
          <p className="skill">MySQL</p>
          <p className="skill">TypeORM</p>
          <p className="skill">Prisma</p>
          <p className="skill">Jest</p>
          <p className="skill">AWS</p>
          <p className="skill">Git</p>
          <p className="skill">Docker</p>
          <p className="skill">Linux</p>
          <p className="skill">Vercel</p>
          <p className="skill">Firebase</p>
          <p className="skill">Webpack</p>
        </div>
      </motion.div>
      {/* Projects */}
      <div className="flex flex-col-reverse w-[90%] md:[w-80%] md:w-[72%] mx-auto">
        <motion.div
          className=" flex-1 mx-auto w-[90%] md:w-[80%] mb-12"
          ref={ref3}
          animate={controls3}
          initial="hidden"
          variants={variants}
        >
          <p className="text-3xl font-bold text-white/30 text-center mt-16 mb-16 heading">
            Projects
          </p>
          <div className="w-full mt-4 flex flex-col gap-10">
            <ProjectTile
              title="The Lounge"
              description="A platform where users can create lobbies and play the classic multiplayer card game of Court Piece with with friends."
              techs={[
                'Nextjs',
                'TailwindCSS',
                'Node',
                'Express',
                'MongoDB',
                'SocketIO',
              ]}
              classes="w-3/4"
              url="/projects/thelounge"
            />
            <ProjectTile
              title="Discord Clone"
              description="Create and join text, audio and video channels and chat with friends, share files and documents."
              techs={[
                'Nextjs',
                'TailwindCSS',
                'Shadcn',
                'SocketIO',
                'MySQL',
                'Prisma',
              ]}
              classes="w-2/3"
              url="https://wordcord-production.up.railway.app/"
            />
            <ProjectTile
              title="DevCircle"
              description="A social platform connecting developers, who can then share their work. Developers add their links and personal details to let others know what they are upto."
              techs={['React', 'Redux', 'Nodejs', 'Express', 'MongoDB']}
              classes="w-2/5"
              url="https://github.com/bilalwaheed099/mern-DevCircle-server"
            />
            <ProjectTile
              title="Recipo"
              description="A food ingredients application. This app uses an external API to present the ingredients of the dish selected by the user. Moreover, user and add the list of ingredients to shopping"
              techs={['HTML', 'CSS', 'JavaScript', 'APIs']}
              classes="w-2/5"
              url="https://brave-hawking-18011e.netlify.app/"
            />
            <ProjectTile
              title="Webber"
              description="A complete website frontend made using React and TailwindCSS. The UI is completely responsive."
              techs={['React', 'TailwindCSS', 'Vercel']}
              classes="w-2/5"
              url="https://webber.vercel.app/"
            />
          </div>
        </motion.div>
        {/* Experience */}
        <motion.div
          className="flex-1"
          ref={ref2}
          animate={controls2}
          initial="hidden"
          variants={variants}
        >
          <p className="text-3xl font-bold text-white/30 text-center mb-16 heading">
            Experience
          </p>
          <div className="flex flex-col gap-y-20">
            <Experience
              company="Tintash, Pakistan"
              title="Software Engineer"
              time="July 2022 - Present"
              desc="I work on frontend as well as backend in blockchain domain. I develop APIs, create frontend flows, write test cases, document stuff, manage SSL certificates etc."
              skills={[
                'JavaScript',
                'TypeScript',
                'Svelte',
                'Nextjs',
                'Nodejs',
                'TypeORM',
                'MySQL',
                'Stripe',
                'Voucherify',
                'AWS',
                'Blockchain',
                'Stacks Blockchain',
                'Stacks.js',
              ]}
            />
            <Experience
              company="AlphaSquad, Pakistan"
              title="Frontend Developer (Intern)"
              time="July 2021 - Sept 2021"
              desc="Developed a plugin for Figma to convert a Figma file to HTML + TailwindCSS code. Also translated Figma designs to frontends using React and tailwindCSS."
              skills={[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Figma',
                'Webpack',
              ]}
            />
          </div>
        </motion.div>
      </div>
      {/* Footer */}
      <div className="w-[80%] mt-12 mx-auto ">
        <p className="text-white/20 italic text-sm text-center">
          Designed and developed by Bilal Waheed, using Nextjs, Tailwind and
          Framer-motion.
        </p>
        <p className="mt-3 text-white/20 font italic text-sm text-center">
          P.S. This website is still a WIP.
        </p>
      </div>
    </div>
  );
}
