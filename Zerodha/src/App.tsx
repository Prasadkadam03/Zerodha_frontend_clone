import { BrowserRouter, Route, Routes } from "react-router-dom"
import Zerodha from "./pages/Zerodha"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="*" element ={<Zerodha/>} />
      </Routes>
      
    </BrowserRouter>
     
    </>
  )
}

export default App
