import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function App() {

  // ========================= AOS animation ====================================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false
    })
  }, [])
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}