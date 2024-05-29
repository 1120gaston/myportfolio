import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import SectionTitle from './SectionTitle'

const ServiceCard = ({ index, title, icon, text }) => {
  return (
    <Tilt options={{ max: 40, scale: 1, speed: 450, }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450, }}
          className="bg-[#222444] rounded-[20px] py-5 px-7 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
          <p style={{ textAlign: 'center' }}>{text}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <SectionTitle title="Overview." />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Highly Skilled and experienced Senior Front-end Developer with expertise in HTML, CSS specially React.
        Possessing over 7 years of hands-on experience, with a deep understanding of developing and implementing complex software solutions.
        Proven track record in designing and building scalable applications that meet business requirements and exceed client expectations.
        I am excited to collaborate and share ideas with colleagues and thinkers around me.
        I believe in making tech for social good and love to work on products that facilitate the communication of people.
        Collaborative team player with excellent communication skills and a strong background in working in agile environments.
        Diligently stays abreast of emerging technologies and frameworks to drive continuous improvement.
        Known for reducing development time and delivering exceptional results for new projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
