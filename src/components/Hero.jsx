import { motion } from 'framer-motion'
import { styles } from '../styles'
import { profile, bwmap } from '../assets'
import SectionTitle from './SectionTitle'

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bwmap})` }}>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div style={{ zIndex: '10' }}>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span className="sm:text-[darkpink] sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
                <SectionTitle title="Jaron Gaston" />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Senior Front-end Developer with +7 years of experience
            </p>
          </div>
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
          <div></div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
        <div style={{ marginLeft: '-200px', zIndex: '1' }}>
          <img
            className="absolute bottom-0 ml-[38vw] 
            lg:ml-[63vw] md:ml-[63vw] xmd:ml-[48vw] 2xl:ml-[71vw]
            sm:h-[78vh] md:h-[58vh] xl:h-[68vh]"
            src={profile}
            alt="shaquille"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
