import React, { useReducer } from "react";

export const ReviewCtx = React.createContext({});

const initialState = {
  reviews: [],
  average: 0,
  editingReview: '',
};

const totalReviews = (reviews) => {
  let totalReviews = reviews.reduce((prevVal, currentVal) => prevVal + currentVal.rating, 0);
  return totalReviews / reviews.length;
}
const reviewReducer = (state, action) => {
  const reviews = [...state.reviews];
    if (action.type === 'ADD') {
       reviews.unshift(action.payload);
        let totalReview = totalReviews(reviews);
        return {
            reviews:reviews,
            average:totalReview,
            editingReview: '',
        }
    }
    if (action.type === 'EDIT') {
      const editReview = reviews.find((review) => review.id === action.id);
      const editReviewIndex = reviews.indexOf(editReview);
      reviews.splice(editReviewIndex,1);
      let totalReview = totalReviews(reviews)
      return {
          reviews:reviews,
          average:totalReview,
          editingReview: editReview
      }
    }
    if (action.type === 'DELETE') {
      const deleteReview = reviews.find((review) => review.id === action.id);
      const deleteReviewIndex = reviews.indexOf(deleteReview);
      reviews.splice(deleteReviewIndex,1);
      if (reviews.length === 0) {
        console.log('only one left');
        return initialState;
      }
      let totalReview = totalReviews(reviews)
      return {
        reviews:reviews,
        average:totalReview,
        editingReview: ''
      }
    }
  return initialState;
};
//need to add state of edit button on / off and life up the state

export default function ReviewProvider(props) {
  const [reviewState, dispatch] = useReducer(reviewReducer,initialState);
  const addReview = (reviewObj) => {
    dispatch({type:'ADD', payload:reviewObj});
  }
  const editReview = (id) => {
    dispatch({type: 'EDIT', id:id});
  }
  const deleteReview = (id) => {
    dispatch({type:"DELETE", id:id});
  }
  return <ReviewCtx.Provider value={{
    reviewState: reviewState,
    addReview: addReview,
    editReview: editReview,
    deleteReview:deleteReview,
  }}>{props.children}</ReviewCtx.Provider>;
}
