import React, { useContext } from 'react'
import { ReviewCtx } from '../../Context/ReviewProvider'
import style from "./FeedbackSummary.module.css"
const FeedbackSummary = () => {
  const reviewCtx = useContext(ReviewCtx);
  return (
    <div className={style.container}>
        <p> {reviewCtx.reviewState.reviews.length} reviews </p>
        <p>Average Rating: {`${isNaN(reviewCtx.reviewState.average) ? 0 : +reviewCtx.reviewState.average.toFixed(2) }`}</p> 
    </div>
  )
}

export default FeedbackSummary;