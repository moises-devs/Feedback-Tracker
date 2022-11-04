import Header from "./Components/Header/Header";
import FeedbackBoard from "./Components/FeedbackBoard/FeedbackBoard";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import ReviewProvider from "./Context/ReviewProvider";
function App() {
  return (
    <ReviewProvider>
    <Header>
      <FeedbackBoard />
      <FeedbackList />
    </Header>
    </ReviewProvider>
  );
}

export default App;
