import React, { useContext } from 'react'
import style from "./FeedbackItem.module.css";
import Card from '../UI/Card/Card';
import { CiEdit } from "react-icons/ci";
import {AiOutlineDelete } from "react-icons/ai";
import { ReviewCtx } from '../../Context/ReviewProvider';
const FeedbackItem = (props) => {
    const reviewCtx = useContext(ReviewCtx);
    const editHandler = () => {
        reviewCtx.editReview(props.id);
    };
    const deleteHandler = () => {
        reviewCtx.deleteReview(props.id);
    }
  return (
        <Card>
            <div className={style.container}>
                <div className={style['rate-icon']}> <span>{props.rating} </span> </div>
                <p> {props.text}</p>
                <div className={style.actionBtns}>
                    <button onClick={deleteHandler}> <AiOutlineDelete/> </button>
                    <button onClick={editHandler}> <CiEdit/> </button>
                </div>
            </div>
        </Card>
  )
}

export default FeedbackItem;