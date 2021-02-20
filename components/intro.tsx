import { useState } from "react";
import { motion } from "framer-motion";

const Wave = () => (
  <motion.div
    className="block"
    animate={{
      rotate: [0, 30, 0],
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeatDelay: 1,
    }}
  >
    👋
  </motion.div>
);

const Intro = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="flex-col flex md:justify-between mt-12 mb-12">
      <h1
        className="flex flex-row text-6xl md:text-7xl font-bold leading-tight md:pr-8 text-accent-redwood dark:text-accent-caramel"
        onMouseOver={() => setCount(count + 1)}
      >
        Hello!
        <Wave key={count} />
      </h1>
    </section>
  );
};

export default Intro;
