import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Email from "../pages/Email.jsx";
import Score from "../pages/Score.jsx";
import BookMeeting from "../pages/BookMeeting.jsx";
function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<Email />} />
          <Route path="/score" element={<Score />} />
          <Route path={"/Book-Meeting"} element={<BookMeeting/>} />
      </Routes>
    </>
  )
}

export default App
