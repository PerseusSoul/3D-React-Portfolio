import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import { useGlobalContext } from "../Context/GlobalContext";

const AchievementCard = ({ index, achievement, company }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="black-fade-gradient p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{achievement}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <p className="mt-1 text-zinc-400 text-[16px]">{company}</p>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  const { isMobile } = useGlobalContext();

  const achievementsContent = (
    <div className={`mt-12 black-gradient rounded-[20px]`}>
      <div
        className={`black-gradient rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Notable Accomplishments</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.achievement}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );

  return isMobile ? (
    <motion.section
        variants={staggerContainer()}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
      {achievementsContent}
    </motion.section> ) : (
    <motion.section
       variants={staggerContainer()}
       initial={"hidden"}
       whileInView="show"
       viewport={{ once: true, amount: 0.25 }}
       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
     >
       <span className="hash-span">
         &nbsp;
       </span>
       {achievementsContent}
    </motion.section>
  )
};

export default Achievements;
