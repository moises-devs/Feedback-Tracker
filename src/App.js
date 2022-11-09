import Header from "./Components/Header/Header";
import FeedbackBoard from "./Components/FeedbackBoard/FeedbackBoard";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import ReviewProvider from "./Context/ReviewProvider";
import BgLayer from "./Components/UI/BgLayer/BgLayer";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <ReviewProvider>
    <Header/>
    <BgLayer>
    <Routes>
      <Route path="/" element={
      <>
        <FeedbackBoard />
        <FeedbackList />
      </>
      }/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BgLayer>
    </ReviewProvider>
  );
}

export default App;
