import React from 'react'
import style from "./FeedbackSummary.module.css"
const FeedbackSummary = () => {
  return (
    <div className={style.container}>
        <p> 3 reviews </p>
        <p>Average Rating: 8.5</p> 
    </div>
  )
}

export default FeedbackSummary;