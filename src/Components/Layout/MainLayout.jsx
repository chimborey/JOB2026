import Footer from "../../Page/Page/Footer";
import Header from "../../Page/Page/Header";
import { Outlet } from "react-router-dom"

export default function MainLayout() {
      return (
            <>
                  {/* ==================================== Header ==================================== */}
                  <Header />
                  {/* ==================================== Outlet ==================================== */}
                  <Outlet />
                  {/* ==================================== Footer ==================================== */}
                  <Footer />
            </>
      )
}