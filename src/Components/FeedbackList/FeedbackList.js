import React from 'react'
import FeedbackSummary from "../FeedbackSummary/FeedbackSummary";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import style from "./FeedbackList.module.css";
const arr = [{text:'this is feedback', rating: 8, id:Math.random()},
{text:'this is feedback', rating: 8, id:Math.random()},
{text:'this is feedback', rating: 8, id:Math.random()}]

const FeedbackList = () => {
  return (
    <>
    <FeedbackSummary/>
    {arr.map(item => <FeedbackItem key={item.id} text={item.text} rating={item.rating}/>)}
    </>
  );
};

export default FeedbackList;
