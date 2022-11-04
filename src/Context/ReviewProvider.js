import React, { useReducer } from "react";

export const ReviewCtx = React.createContext({});

const initialState = {
  reviews: [],
  average: 0,
};
const reviewReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedReviews = [...state.reviews];
        updatedReviews.unshift(action.payload);
        let totalReview = updatedReviews.reduce((prevVal, currentVal) => prevVal + currentVal.rating, 0);
        totalReview = totalReview / updatedReviews.length;
        return {
            reviews:updatedReviews,
            average:totalReview
        }
    }
  return initialState;
};

export default function ReviewProvider(props) {
  const [reviews, dispatch] = useReducer(reviewReducer,initialState);
  const addReview = (reviewObj) => {
    dispatch({type:'ADD', payload:reviewObj});
  }
  return <ReviewCtx.Provider value={{
    reviews: reviews,
    addReview: addReview
  }}>{props.children}</ReviewCtx.Provider>;
}
