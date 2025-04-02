import { useRef, useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, linkedin, previous, next } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsIntro } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCode,
  linkedinPost,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="black-gradient p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl bg-stone-900"
          />
          {/* <div className="absolute inset-0 flex-end m-3 card-img_hover flex">
            <div
              onClick={() => window.open(sourceCode, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
            >
              <img
                src={github}
                alt="github"
                className="w-8/12 h-8/12 object-contain"
              />
            </div>
            {linkedinPost && (
              <div
                onClick={() => window.open(linkedinPost, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-10/12 h-10/12 object-contain"
                />
              </div>
            )}
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-stone-300 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkForScrollPosition();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <span className="hash-span" id="">&nbsp;</span>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Previous Works</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-400 text-[17px] max-w-3xl leading-[30px]"
        >
          {projectsIntro}
        </motion.p>
      </div>

      <div className="relative mt-20">
        {canScrollLeft && (
          <button
            className="absolute left-0 z-10 p-2 bg-white-100 rounded-full transform -translate-y-1/2 top-1/2"
            onClick={() => handleScroll("left")}
          >
            <img src={previous} alt="previous" className="w-10 h-10" />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={checkForScrollPosition}
          className="flex gap-7 overflow-x-auto hide-scrollbar"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        {canScrollRight && (
          <button
            className="absolute right-0 z-10 p-2 bg-stone-400 rounded-full transform -translate-y-1/2 top-1/2"
            onClick={() => handleScroll("right")}
          >
            <img src={next} alt="next" className="w-10 h-10" />
          </button>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
