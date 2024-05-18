'use client';

import { ImagesSlider } from '@/components/ui/image-slider';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Great_Vibes, Libre_Baskerville, Lora } from 'next/font/google';

const GV = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

const lora = Lora({
  subsets: ['latin'],
  weight: '400',
});

const PageSlide = () => {
  const images = ['/bg/8.jpeg', '/bg/27.jpeg', '/bg/30.jpeg', '/bg/26.jpeg', '/bg/12.jpeg'];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="absolute w-full top-[70%] flex flex-col items-center text-center z-50 text-white overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true }}>
          <motion.h1 variants={itemVariants} className={`${lora.className} font-bold`}>
            P E R N I K A H AN
          </motion.h1>
          <div className={`${GV.className} text-3xl sm:text-5xl space-x-2`}>
            <motion.span variants={itemVariants}>Ari</motion.span>
            <motion.span variants={itemVariants}>&</motion.span>
            <motion.span variants={itemVariants}>Cici</motion.span>
          </div>
          <Separator className="max-w-[10rem] bg-white mt-4" />
          <div className={`${libre.className} text-sm sm:text-2xl space-x-2`}>
            <motion.span variants={itemVariants}>22.</motion.span>
            <motion.span variants={itemVariants}>Juni.</motion.span>
            <motion.span variants={itemVariants}>2024</motion.span>
          </div>
        </motion.div>
      </div>
    </ImagesSlider>
  );
};

export default PageSlide;
