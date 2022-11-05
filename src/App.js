import Header from "./Components/Header/Header";
import FeedbackBoard from "./Components/FeedbackBoard/FeedbackBoard";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import ReviewProvider from "./Context/ReviewProvider";
import BgLayer from "./Components/UI/BgLayer/BgLayer";
function App() {
  return (
    <ReviewProvider>
    <Header/>
    <BgLayer>
      <FeedbackBoard />
      <FeedbackList />
    </BgLayer>
    </ReviewProvider>
  );
}

export default App;
