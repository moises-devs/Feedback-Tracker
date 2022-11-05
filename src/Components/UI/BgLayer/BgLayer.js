import React from 'react'
import styles from "./BgLayer.module.css";
const BgLayer = (props) => {
  return (
    <main className={styles.container}>
    <div className={styles.sectionwrapper}>
      {props.children}
    </div>
</main>
  )
}


export default BgLayer;