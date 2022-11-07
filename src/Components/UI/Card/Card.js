import React from 'react'
import styles from "./Card.module.css"
import {motion, AnimatePresence} from "framer-motion";
const Card = ({children}) => {
  return (
    <AnimatePresence>
    <motion.section animate={{opacity:1}} initial={{opacity:0}} exit={{opacity: 0}} className={styles.card}>
        {children}
    </motion.section>
    </AnimatePresence>
  )
}

export default Card;