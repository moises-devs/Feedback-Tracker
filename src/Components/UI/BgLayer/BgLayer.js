import React from 'react'
import styles from "./BgLayer.module.css";
const BgLayer = (props) => {
  return (
  <main className={styles.wrapper}>
    {props.children}
  </main>
  )
}


export default BgLayer;