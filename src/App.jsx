import React from "react";
import styles from "./style";
import {
  Hero,
  Navbar,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components/";

const App = () => {
  const showWithChildrenVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  // const showChildrenVariants = {
  //   hidden: { opacity: 0, scale: 0.5 },
  //   show: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  // };

  const slideRightVariants = {
    hidden: {
      x: "-90vw",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    viewport: { once: true },
  };

  const slideLeftVariants = {
    hidden: {
      x: "90vw",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    viewport: { once: true },
  };

  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero showWithChildrenVariants={showWithChildrenVariants} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business slideRightVariants={slideRightVariants} />
          <Billing slideLeftVariants={slideLeftVariants} />
          <CardDeal slideRightVariants={slideRightVariants} />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;