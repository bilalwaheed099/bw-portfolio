import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import {motion, useAnimation} from 'framer-motion';

type ProjectTileProps = {
    title: string,
    description: string,
    techs: string[],
    classes: string,
    url: string
}

const variants = {
    hover: {
      x: 6,
      y: -6,
      scale: 1.2
    },
    initial: {
      x: 0,
      y: 0,
      scale: 1
    }
  };
export const ProjectTile = ({url, title, description, techs, classes}: ProjectTileProps) => {

  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
      
    return (
        <Link href={url} className="relative z-100">
        <div className={`text-center md:text-start text-white bg-gray-300/10 p-6 rounded-xl w-full cursor-pointer hover:scale-[102%] hover:bg-gray-100/20 transition`}
        onMouseEnter={handleMouseEnterControls}
        onMouseLeave={handleMouseLeaveControls}
        >
            <div className="flex gap-x-4 items-center justify-center md:justify-start">
            <p className="font-bold text-gray-200 text-xl">{title}</p>
            {<motion.div className=""
            // animate={isHovered ? "hover" : "initial"}
            transition={{ delay: 0.1 }}
            variants={variants}
            animate={controls}
            >
                <ArrowUpRightIcon className="w-5 h-5 text-gray-200"/>
            </motion.div>}
            </div>
            <p className="mt-2 text-md text-white/30">{description}</p>
            <p className="mt-4 font-semibold text-gray-200 flex flex-wrap gap-3">
            {techs.map(tech => <span className="skill-tag" key={tech}>{tech}</span>)}
            </p>
        </div>
        </Link>
    )
}