import React, { useContext } from 'react'
import { ReviewCtx } from '../../Context/ReviewProvider'
import style from "./FeedbackSummary.module.css"
const FeedbackSummary = () => {
  const reviewCtx = useContext(ReviewCtx);
  return (
    <div className={style.container}>
        <p> {reviewCtx.reviewState.reviews.length} reviews </p>
        <p>Average Rating: {`${reviewCtx.reviewState.average.toFixed(2) || 0 }`}</p> 
    </div>
  )
}

export default FeedbackSummary;