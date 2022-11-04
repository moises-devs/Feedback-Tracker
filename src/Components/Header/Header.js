import React from 'react'
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <>
    <header className={styles.header}>
        <h1>Feedback Made Easy </h1>
    </header>
    <main className={styles.container}>
        <div className={styles.sectionwrapper}>
          {props.children}
        </div>
    </main>
    </>
  )
}

export default Header;