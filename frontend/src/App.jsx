import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Email from "../pages/Email.jsx";

function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<Email />} />
      </Routes>
    </>
  )
}

export default App
