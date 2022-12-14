import React from "react";
import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTA = ({ scaleUpVariants }) => (
  <motion.section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow items-center`}
    variants={scaleUpVariants}
    initial={scaleUpVariants.hidden}
    whileInView={scaleUpVariants.whileInView}
    viewport={scaleUpVariants.viewport}
  >
    <div className="flex flex-col flex-1">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 my-5 sm:my-0`}>
      <Button type="button" text="Get Started" />
    </div>
  </motion.section>
);

export default CTA;
