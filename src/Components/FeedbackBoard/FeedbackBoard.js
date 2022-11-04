import React, { useRef, useState, useContext } from "react";
import style from "./FeedbackBoard.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { ReviewCtx } from "../../Context/ReviewProvider";
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const FeedbackBoard = () => {
  const [rate, setRate] = useState("");
  const [validInput, setValidInput] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const inputRef = useRef();
  const reviewCtx = useContext(ReviewCtx);

  const addReviewHandler = (e) => {
    e.preventDefault();
    let id = Math.random();
    const review = {
      text: inputRef.current.value,
      rating: rate,
      id: id
    };
    reviewCtx.addReview(review);
    console.log(review);

    inputRef.current.value = "";
    setInputTouched(false);
    setRate("");
    setValidInput(false);
  };

  const validtyHandler = (e) => {
    let enteredText = e.target.value;
    setInputTouched(true);
    if (enteredText.trim().length >= 10) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const buttonHandler = (rate) => {
    setRate(rate);
  };

  console.log(reviewCtx.reviews);

  let errorStatement = `${!rate ? 'Please select a rating.' : ''}  ${!validInput ? 'Please enter a comment with atleast 10 characters.' : '' }`;
  return (
    <Card>
      <div className={style.wrapper}>
        <h2> How would you rate your service with us?</h2>
        <ol>
          {numArr.map( index => (
            <li key={index}>
              <Button rate={rate} num={index} onButtonHandler={buttonHandler} />
            </li>
          ))}
        </ol>
        {(!validInput || !rate) && inputTouched && (
          <p className={style.error}>{errorStatement} </p>
        )}
        <form
          className={style["form-control-wrapper"]}
          onSubmit={addReviewHandler}
        >
          <label htmlFor="review"></label>
          <input
            ref={inputRef}
            onChange={validtyHandler}
            placeholder="Write a review"
            id="review"
          />
          <button type="submit" disabled={!validInput || !rate}>
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </Card>
  );
};

export default FeedbackBoard;
