import React, { useContext } from 'react'
import FeedbackSummary from "../FeedbackSummary/FeedbackSummary";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import { ReviewCtx } from '../../Context/ReviewProvider';

const FeedbackList = () => {
  const reviewCtx = useContext(ReviewCtx);
  return (
    <>
    <FeedbackSummary/>
    {reviewCtx.reviewState.reviews.map(item => <FeedbackItem key={item.id} text={item.text} id={item.id} rating={item.rating}/>)}
    </>
  );
};

export default FeedbackList;
