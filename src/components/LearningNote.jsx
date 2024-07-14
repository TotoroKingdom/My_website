import { motion } from 'framer-motion'
import { styles } from '../styles'
import SectionWrapper from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { learningNote } from '../constants'

const LearningNoteCard = ({ index, title, description, image, articlelink }) => {
  return (
    <>
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-full 
      w-full cursor-pointer
      '
        onClick={() => window.open(articlelink)}
      >
        <p className='text-white font-bold text-[36px] '>
          {title}
        </p>
        <div className='mt-1 flex items-center  '>
          <img src={image}
            className='w-24 h-24 rounded-[15px] object-fill '
          />
          <p className='text-white tracking-wider
          text-[18px] ml-[20px]
          ' >{description}</p>
        </div>

      </motion.div>
    </>
  )
}


const LearningNote = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className={`${styles.padding} 
    bg-tertiary rounded-2xl min-h-[300px] 
    `}>
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>My Learning Note</p>
          <h2 className={styles.sectionHeadText} >Writings.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap flex-col  justify-center items-center gap-7 `}
      >
        {learningNote.length > 0 && learningNote.map((notes, index) => {
          return (
            <LearningNoteCard key={notes.title} index={index} {...notes} />
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(LearningNote, '')