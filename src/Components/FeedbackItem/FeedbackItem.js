import React from 'react'
import style from "./FeedbackItem.module.css";
import Card from '../UI/Card/Card';
const FeedbackItem = (props) => {
  return (
        <Card>
            <div className={style.container}>
                <div className={style['rate-icon']}> <span>{props.rating} </span> </div>
                <p> {props.text}</p>
                <div className={style.actionBtns}>
                    <button> + </button>
                    <button> - </button>
                </div>
            </div>
        </Card>
  )
}

export default FeedbackItem;