import React from 'react'
import styles from "./Button.module.css";
const Button = (props) => {
    const clickHandler = () => {
        props.onButtonHandler(props.num);
    }
  return (
    <button onClick={clickHandler} className={`${styles.btn} ${props.rate === props.num ? styles.active : null}`}> {props.num} </button>
  )
}

export default Button;